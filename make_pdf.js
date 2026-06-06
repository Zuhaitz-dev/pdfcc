const { PDFDocument, StandardFonts, rgb, PDFName, PDFString, PDFBool } = require('pdf-lib');
const fs = require('fs');

async function compileGeneralPurposeTool() {
    console.log(">>> Building General Purpose C++ Workspace Developer Tool...");

    if (!fs.existsSync('jscpp_browser.js')) {
        console.error("Error: jscpp_browser.js missing in root folder!");
        return;
    }

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([1150, 760]); 
    const form = pdfDoc.getForm();
    
    form.acroForm.dict.set(PDFName.of('NeedAppearances'), PDFBool.True);

    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const courier = await pdfDoc.embedFont(StandardFonts.Courier);

    page.drawRectangle({ x: 0, y: 0, width: 1150, height: 760, color: rgb(1, 1, 1) });
    
    page.drawRectangle({ x: 40, y: 40, width: 340, height: 680, color: rgb(1, 1, 1), borderColor: rgb(0.9, 0.9, 0.9), borderWidth: 1 }); 
    page.drawRectangle({ x: 400, y: 40, width: 710, height: 680, color: rgb(1, 1, 1), borderColor: rgb(0.9, 0.9, 0.9), borderWidth: 1 }); 

    page.drawText('C++ GENERAL PURPOSE DEVELOPMENT TOOL', { x: 420, y: 695, size: 14, font: helveticaBold, color: rgb(0.1, 0.1, 0.15) });
    page.drawText('Built by ', { x: 420, y: 678, size: 9.5, font: helvetica, color: rgb(0.5, 0.5, 0.5) });
    page.drawText('Zuhaitz-dev', { x: 458, y: 678, size: 9.5, font: helveticaBold, color: rgb(0.05, 0.35, 0.75) });

    const authorLinkAction = pdfDoc.context.obj({ Type: 'Action', S: 'URI', URI: PDFString.of('https://github.com/Zuhaitz-dev/') });
    const authorLinkAnnot = pdfDoc.context.obj({
        Type: 'Annot', Subtype: 'Link', Rect: [455, 674, 520, 690], A: authorLinkAction, Border: [0, 0, 0]
    });
    const mainAnnots = page.node.get(PDFName.of('Annots')) || pdfDoc.context.obj([]);
    mainAnnots.push(authorLinkAnnot);
    page.node.set(PDFName.of('Annots'), mainAnnots);

    page.drawText('WORKSPACE LOGISTICS', { x: 60, y: 685, size: 12, font: helveticaBold, color: rgb(0.1, 0.1, 0.15) });
    page.drawLine({ start: { x: 60, y: 673 }, end: { x: 360, y: 673 }, color: rgb(0.85, 0.85, 0.85), thickness: 1 });

    let yPos = 645;
    const writeHeading = (text) => {
        page.drawText(text, { x: 60, y: yPos, size: 10, font: helveticaBold, color: rgb(0.3, 0.3, 0.35) });
        yPos -= 16;
    };
    const writeBody = (text, isMono = false) => {
        page.drawText(text, { x: 60, y: yPos, size: 9, font: isMono ? courier : helvetica, color: isMono ? rgb(0.2, 0.45, 0.3) : rgb(0.4, 0.42, 0.45) });
        yPos -= 14;
    };

    writeHeading('LANGUAGE DESIGN PARADIGMS');
    writeBody('• Statically typed, fast, compiled language model.');
    writeBody('• Supports both procedural and hardware-level scaling.');
    writeBody('• Zero-overhead abstraction core philosophy.');
    yPos -= 12;

    writeHeading('SANDBOX TYPE SPECIFICATIONS');
    writeBody('bool      : 1 Byte  (max: 1)', true);
    writeBody('char      : 1 Byte  (max: 127)', true);
    writeBody('short     : 2 Bytes (max: 32767)', true);
    writeBody('int       : 4 Bytes (max: 2147483647)', true);
    writeBody('long long : 8 Bytes (max: 2^63 - 1)', true);
    writeBody('pointer   : 4 Bytes (Sandboxed Virtual)', true);
    yPos -= 12;

    writeHeading('INTERPRETER OVERVIEW (JSCPP)');
    writeBody('Designed as a strict implementation block to identify');
    writeBody('undefined or platform-dependent edge behaviors.');
    writeBody('Avoids "over-caring" compiler silent patches.');
    yPos -= 18;

    page.drawText('OFFICIAL C++ RESOURCE LINKS', { x: 60, y: yPos, size: 10, font: helveticaBold, color: rgb(0.1, 0.1, 0.15) });
    page.drawLine({ start: { x: 60, y: yPos - 6 }, end: { x: 360, y: yPos - 6 }, color: rgb(0.85, 0.85, 0.85), thickness: 1 });
    yPos -= 24;

    const buildLink = (label, url) => {
        page.drawText(label, { x: 60, y: yPos, size: 9.5, font: helveticaBold, color: rgb(0.05, 0.35, 0.75) });
        
        const linkAction = pdfDoc.context.obj({ Type: 'Action', S: 'URI', URI: PDFString.of(url) });
        const linkAnnot = pdfDoc.context.obj({
            Type: 'Annot', Subtype: 'Link', Rect: [60, yPos - 2, 360, yPos + 10], A: linkAction, Border: [0, 0, 0]
        });
        const annots = page.node.get(PDFName.of('Annots'));
        annots.push(linkAnnot);
        yPos -= 18;
    };

    buildLink('• Standard C++ Reference Index (cppreference)', 'https://en.cppreference.com/');
    buildLink('• Standard C++ Foundation (isocpp.org)', 'https://isocpp.org/');
    buildLink('• Documentation Tutorials & Guides (cplusplus)', 'https://cplusplus.com/');

    page.drawText('SOURCE CODE EDITOR', { x: 420, y: 635, size: 9, font: helveticaBold, color: rgb(0.4, 0.4, 0.4) });

    const codeField = form.createTextField('CodeInput');
    codeField.addToPage(page, { x: 420, y: 310, width: 670, height: 310 });
    codeField.enableMultiline();
    codeField.setFontSize(11.5);
    codeField.setText(`#include <iostream>\n\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    \n    int value = 42;\n    cout << "The answer is: " << value << endl;\n    \n    return 0;\n}`); 
    codeField.updateAppearances(courier);

    const runButtonField = form.createTextField('RunCodeButtonField');
    runButtonField.addToPage(page, { x: 420, y: 260, width: 150, height: 32 });
    runButtonField.setText("RUN COMPILER");
    runButtonField.setFontSize(10);
    runButtonField.updateAppearances(helveticaBold);

    const buttonWidget = runButtonField.acroField.getWidgets()[0];
    const buttonVisualDict = pdfDoc.context.obj({
        BC: [],
        BG: [0.13, 0.15, 0.17],
        CA: PDFString.of("RUN COMPILER")
    });
    buttonWidget.dict.set(PDFName.of('MK'), buttonVisualDict);

    const fieldDict = runButtonField.acroField.dict;
    fieldDict.set(PDFName.of('DA'), PDFString.of('/v 10 Tf 1 1 1 rg'));

    page.drawText('TERMINAL CONSOLE READOUT', { x: 420, y: 220, size: 9, font: helveticaBold, color: rgb(0.4, 0.4, 0.4) });

    const outField = form.createTextField('OutputField');
    outField.addToPage(page, { x: 420, y: 60, width: 670, height: 145 });
    outField.enableMultiline(); 
    outField.enableReadOnly();
    outField.setFontSize(11.5);
    outField.setText("System Workspace Idle. Modify code above and trigger execution."); 
    outField.updateAppearances(courier);

    const rawEngineCode = fs.readFileSync('jscpp_browser.js', 'utf8');
    const escapedEngineSource = rawEngineCode
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`');

    const globalEngineJS = `
        var __RAW_JSCPP__ = \`${escapedEngineSource}\`;
        var JSCPP_INSTANCE = null;

        function runCompilerEngine() {
            var outObj = this.getField("OutputField");
            var cField = this.getField("CodeInput");
            
            if (!outObj || !cField) return;
            
            outObj.value = "Executing environment processing threads...";
            
            try {
                var engineSandbox = new Function(__RAW_JSCPP__ + "; return JSCPP;");
                JSCPP_INSTANCE = engineSandbox();
                
                if (JSCPP_INSTANCE && cField.value) {
                    var capturedOutput = "";
                    var config = {
                        stdio: {
                            write: function(s) { capturedOutput += s; }
                        }
                    };
                    var exitCode = JSCPP_INSTANCE.run(cField.value, "", config);
                    outObj.value = capturedOutput + "\\n\\n[Environment Process Terminated: Exit Code " + exitCode + "]";
                } else {
                    outObj.value = "Runtime Fault: Engine context initialization failed.";
                }
            } catch(e) {
                outObj.value = "C++ Core Lexical Parsing Exception Error:\\n" + e.message;
            }
        }
    `;
    pdfDoc.addJavaScript('CPPEngine', globalEngineJS);

    const runAction = pdfDoc.context.obj({
        Type: 'Action', S: 'JavaScript', JS: PDFString.of('runCompilerEngine.call(this);')
    });
    buttonWidget.dict.set(PDFName.of('AA'), pdfDoc.context.obj({ U: runAction }));

    const blockTypingAction = pdfDoc.context.obj({
        Type: 'Action', S: 'JavaScript', JS: PDFString.of('event.rc = false;')
    });
    buttonWidget.dict.get(PDFName.of('AA')).set(PDFName.of('K'), blockTypingAction);

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('cpp_ide.pdf', pdfBytes);
    console.log(">>> Success! Generated standalone general-purpose tool workspace: cpp_ide.pdf");
}

compileGeneralPurposeTool().catch(console.error);
