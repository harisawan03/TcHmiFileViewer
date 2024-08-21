module TcHmi {
	export module Functions {
		export module TcHmiFileViewer {
			export function EmbedFile(file: any, host: any) {

				// get HTML Host based on passed in ID
				const htmlHost = document.getElementById(host);

				// look for the embed element
				let embedTag: HTMLEmbedElement | undefined = document.getElementById(host + '_embedFile') as HTMLEmbedElement;

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
		}
	}
}
TcHmi.Functions.registerFunctionEx('EmbedFile', 'TcHmi.Functions.TcHmiFileViewer', TcHmi.Functions.TcHmiFileViewer.EmbedFile);
