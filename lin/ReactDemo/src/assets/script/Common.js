const common = {
    storage(parm) {
        if (parm.type == "get") {
            return JSON.parse(localStorage.getItem(parm.key))
        } else if (parm.type == "set") {
            localStorage.setItem(parm.key, JSON.stringify(parm.value))
        } else if (parm.type == "remove") {
            localStorage.removeItem(parm.key)
        }
    },
    isNull(value) {
        return !value && typeof (value) != "undefined" && value != 0 ? true : false;
    },
    getEndpointBase(Url) {
        return Url.substring(0, Url.lastIndexOf("\/") + 1);
    },
    getFileType(fileValue) {
        return fileValue.substring(fileValue.lastIndexOf(".") + 1);
    },
    getUrlParmByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    coverPostfix(fileValue) {
        let fileType = this.getFileType(fileValue);
        let png = null;
        switch (fileType.toLowerCase()) {
            case "xls":
            case "xlsx":
                png = require('../img/EXCEL.png');
                break;
            case "doc":
            case "docx":
                png = require('../img/WORD.png');
                break;
            case "ppt":
            case "pptx":
                png = require('../img/PPT.png');
                break;
            case "pdf":
                png = require('../img/PDF.png');
                break;
            case "png":
                png = require('../img/PNG.png');
                break;
            case "jpg":
                png = require('../img/JPG.png');
                break;
            default:
                png = require('../img/OTHER.png');
                break;
        }

        return png;
    },
    fileOpen(file) {
        console.log(file);
        var downloadUrl = file.webUrl;
        var id = file.id;
        var name = file.fileTitle;
        var email = "admin@M365x634941.onmicrosoft.com";
        var inter1 = "https://uat.cowork.lenovo.com/api/wopi/files/fileinfo.ashx?path=" + encodeURIComponent(downloadUrl) + "&id=" + id + "&name=" + encodeURIComponent(name) + "&email=" + email;
        var inter2 = "https://uat.cowork.lenovo.com/wopihost.ashx?path=" + encodeURIComponent(inter1) + "&name=" + name;
        window.open(inter2, "_blank", "location=no");
    },
    bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        var k = 1024, // or 1024
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    },
    //排序
    Compare(propertyName, action) {
        if (action) {
            //升序
            return function (obj1, obj2) {
                let val1 = obj1[propertyName];
                let val2 = obj2[propertyName];
                if (val2 < val1) {
                    return 1;
                } else if (val2 > val1) {
                    return -1;
                } else {
                    return 0;
                }
            }
        } else {
            //降序
            return function (obj1, obj2) {
                let val1 = obj1[propertyName];
                let val2 = obj2[propertyName];
                if (val2 > val1) {
                    return 1;
                } else if (val2 < val1) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }

    }
}

export default common;