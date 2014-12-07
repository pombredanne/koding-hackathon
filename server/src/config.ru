require 'bundler/setup'
Bundler.require(:default)

require './app.rb'

map "/" do
    run Maze::API
end
# map "/another" do
#     run AnotherRoute
# end