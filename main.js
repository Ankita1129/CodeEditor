let editorhtml = ace.edit("html-code");
let editorcss = ace.edit("css-code");
let editorjs = ace.edit("js-code");

editorhtml.setTheme("ace/theme/cobalt");
editorcss.setTheme("ace/theme/cobalt");
editorjs.setTheme("ace/theme/cobalt");

editorhtml.session.setMode("ace/mode/html");
editorcss.session.setMode("ace/mode/css");
editorjs.session.setMode("ace/mode/javascript");

function run() {
    let html_code = editorhtml.getValue();
    let css_code = editorcss.getValue();
    let js_code = editorjs.getValue();
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "</style>";
    output.contentWindow.eval(js_code);
}
