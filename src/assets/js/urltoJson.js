function urlToJson(str) {
    let arr = [], json = {};
    arr = str.split('&');

    for (var i = 0; i < arr.length; i++) {
        json[arr[i].split('=')[0]] = arr[i].split('=')[1];
    }
    return json;
}


export const urlParse = function (url) {

    // let url = window.location.href;
    let target = url.indexOf("?");
    let payUrl = url.substring(0, target);
    let payParams = url.substring(target + 1, url.length);

    // let payParams = window.location.search;

    return urlToJson(payParams);
};

export const ab2str = function (u, f) {
    var b = new Blob([u]);
    var r = new FileReader();
    r.readAsText(b, 'utf-8');
    r.onload = function (){if(f)f.call(null,r.result)}
};

export const urlEqual = function (url) {

    // let url = window.location.href;
    let target = url.indexOf("=");
    let payUrl = url.substring(0, target);
    let payParams = url.substring(target + 1, url.length);

    // let payParams = window.location.search;

    return urlToJson(payParams);
};

export const schoolEngName = function (url) {
    let target = url.indexOf("e");
    let payUrl = url.substring(0, target);
    let payParams = url.substring(target + 1, url.length);
    return urlToJson(payParams);
}