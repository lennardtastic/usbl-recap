//Grab the inline template
var template = document.getElementById('template').innerHTML;

//Compile the template
var compiled_template = Handlebars.compile(template);

//Create helper for dealing with JSON
Handlebars.registerHelper('toJSON', function(obj) {
    return JSON.stringify(obj, null, 3);
});

//Render the data into the template
var rendered = compiled_template({name: "Luke", power: "force"});

//Overwrite the contents of #target with the renderer HTML
document.getElementById('target').innerHTML = rendered;
