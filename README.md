# C++ PDF IDE (pdfcc)

A fully functional, self-contained general purpose C++ execution environment, static parser, and interactive development tool embedded entirely within a single PDF document.

Open the PDF, modify your procedural instructions inside the source canvas box, and it compiles and evaluates live directly inside your browser.

## Features

* **Zero Dependencies:** Once compiled, the document runs completely standalone and offline using the native JavaScript sandbox engines built directly into PDF readers.
* **Strict Lexical Parsing Engine:** Powered by an integrated, lightweight execution instance of `JSCPP` to explicitly flag platform-dependent edge cases and undocumented usages rather than silently patching them.
* **Full-Width Minimalist Aesthetic:** An industrial developer workspace layout offering maximum horizontal room for code entry and standard console stream readouts.
* **Hardware-Linked Primitives:** Native verification for core data types, pointers, linear data structures, multi-dimensional array initializers, and static evaluation loops.
* **Integrated Documentation Hub:** Active sidebar logistics panel tracking variable byte constraints alongside working hyperlinks routing out to official C++ reference frameworks.

## How to Build It

If you want to compile the PDF tool workspace yourself from the underlying generator scripts:

1. Clone the repository:
```bash
git clone https://github.com/Zuhaitz-dev/pdfcc.git
cd pdfcc
```

2. Install the required PDF specification structural manipulator library:
```bash
npm install
```

3. Run the master pipeline compiler execution script:
```bash
node make_pdf.js
```

4. Open the newly generated `cpp_ide.pdf` document right inside Chromium or Google Chrome.

> **Note:** Chromium-based browsers (Chrome, Brave) utilize a low-level engine called *PDFium* that fully supports the hardware execution loops required for continuous interactive scripts.

> Actually, it could work in Firefox, I guess.

## How it Works Under the Hood

Standard PDF specifications map an isolated, sandboxed JavaScript layer primarily used for calculating standard form actions. This tool expands that sandbox boundary by:

1. Utilizing `pdf-lib` to write low-level form dictionary components (`/AA`, `/MK`, `/DA`) directly to the document object tree.
2. Injecting a custom procedural token interpreter engine directly into the global execution registry of the document.
3. Hooking the native form widget Mouse Action triggers to pass the plain-text string buffers from code annotation bounding boxes into the interpreter's sandboxed virtual memory space.

## License

MIT License. Feel free to fork it, break it, and build weirder things inside PDFs. Pretty much, just have fun with it.
