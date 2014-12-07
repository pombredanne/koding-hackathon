var fs = require('fs');

// Tos Class
var Tos = function tos(name){
    this.tos = {};
    this.tos.name = name;
    // forgot what i should call unformatted
    this.tos.name_cleaned = name.toLowerCase();
};

Tos.prototype.name = function name(name){
    if(!name && this.tos.name)
        return this.tos.name;
    this.tos.name = name;
};

Tos.prototype.html = function html(html){
    if(!html && this.tos.html)
        return this.tos.html;
        
    this.tos.html = fs.readlinkSync('../../server/docs/samples tos/'+this.tos.name_cleaned);
    if(!this.tos.html)
        throw "Html import is invalid!";
};

Tos.prototype.result = function result(html){
    if(!html && this.tos.result)
        return this.tos.result;
    
    this.tos.result = fs.readlinkSync('../../server/docs/samples tos/results/'+this.tos.name_cleaned );
    if(!this.tos.result)
        throw "Reformat html is invalid!";
};
// End Class

module.export = Tos;