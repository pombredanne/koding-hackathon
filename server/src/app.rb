require 'grape'
require 'json'


## JSON FORMATER

module JSendSuccessFormatter
  def self.call object, env
    { :status => 'success', :data => object }.to_json
  end
end

module JSendErrorFormatter
  def self.call message, backtrace, options, env
    # This uses convention that a error! with a Hash param is a jsend "fail", otherwise we present an "error"
    if message.is_a?(Hash)
      { :status => 'fail', :data => message }.to_json
    else
      { :status => 'error', :message => message }.to_json
    end
  end
end

## DONE JSON FORMATER


## MAZE CODE

module Maze
    class API < Grape::API
      #version   'v1'
      format    :json
      rescue_from :all

      formatter :json, JSendSuccessFormatter
      error_formatter :json, JSendErrorFormatter

      # testing
      get :hello do
        { hello: "world" }.to_json
      end
      
      # reformat method
      get :reformat do
        params do
          requires :url, type: String, regexp: /^(http|https)\:\/\//, desc: 'TOS Url to short it'
        end
        #puts ':id' do
        if !params[:url]
            error! "This should have a url http valid url"
        end
        # getUrl(params[:url])
        { hello: params[:url] }.to_json
      end
      
      # get url Call
      def getUrl(url)
          page = Nokogiri::HTML(open(url))
          # http://ruby.bastardsbook.com/chapters/web-crawling/
      end
    end
end

#use Rack::Session::Cookie
#run Rack::Cascade.new [API]