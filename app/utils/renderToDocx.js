import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';
const renderToDocx = (data, templateName ) => {
  var content = fs.readFileSync(
    path.resolve(path.resolve(__dirname, templateName)),
    'binary'
  );

  var zip = new PizZip(content);

  var doc = new Docxtemplater();
  doc.loadZip(zip);
  doc.setData({
    ...data
  });

  try {
    doc.render();
  } catch (error) {
    var e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties
    };
    console.log(JSON.stringify({ error: e }));

    throw error;
  }

  var buf = doc.getZip().generate({ type: 'nodebuffer' });
  let name = `${templateName}${Math.random()}.docx`;
  fs.writeFileSync(path.resolve(__dirname, name), buf);
};
export default renderToDocx;
