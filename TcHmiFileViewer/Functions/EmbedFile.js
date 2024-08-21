var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let TcHmiFileViewer;
        (function (TcHmiFileViewer) {
            function EmbedFile(file, host) {
                // get HTML Host based on passed in ID
                const htmlHost = document.getElementById(host);
                //const embedTag = htmlHost?.children[0].appendChild(document.createElement('embed'));
                // look for the embed element
                let embedTag = document.getElementById(host + '_embedFile');
                // if it doesn't exist yet, create it nested under the HTML Host's template div
                if (!embedTag) {
                    embedTag = htmlHost?.children[0].appendChild(document.createElement('embed'));
                }
                // configure the embed element with id, width/height, and the passed in file path
                // if the element already exists, this resets the src attribute to force browser to load updated file
                if (embedTag) {
                    embedTag.id = host + '_embedFile';
                    embedTag.width = '100%';
                    embedTag.height = '100%';
                    embedTag.src = file;
                }
            }
            TcHmiFileViewer.EmbedFile = EmbedFile;
        })(TcHmiFileViewer = Functions.TcHmiFileViewer || (Functions.TcHmiFileViewer = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('EmbedFile', 'TcHmi.Functions.TcHmiFileViewer', TcHmi.Functions.TcHmiFileViewer.EmbedFile);
//# sourceMappingURL=EmbedFile.js.map