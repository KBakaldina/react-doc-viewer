import React from 'react';
import FileViewer from 'react-file-viewer';
import PdfViewer from './PdfViewer';
import Doc from '../resources/doc';

const App = () => {
	const { name, type, src, ext } = Doc;
	const fileUrl = `data:${type};base64,${src}`;
	const url = { url: fileUrl };
	const onError = (e) => { console.log(e); };

	return (
		<div style = {{ textAlign: 'center' }}>
			<h1>{name}</h1>
			<a href={fileUrl} download={name}>Download</a>
			{
				type === 'application/pdf'
				? <PdfViewer pdf={url} />
				: <FileViewer
					fileType={ext}
					filePath={fileUrl}
					onError={onError}
					style={{ height: 'auto', width: 'auto' }}
				/>
			}
		</div>
	);
}

export default App;
