---
templateKey: default-page
title: Instruction for Camera-Ready Submission
seo:
  browserTitle: Instruction for Camera-Ready Submission | EMNLP 2021
  description: 
  title: Instruction for Camera-Ready Submission | EMNLP 2021
---

14 minute read

#### On this page

*   [1\. Metadata (Part A in the final submission form)](#1-metadata-part-a-in-the-final-submission-form)
    *   [Can I make changes to the author list in the camera-ready version?](#can-i-make-changes-to-the-author-list-in-the-camera-ready-version)
    *   [How should I enter metadata on the START system?](#how-should-i-enter-metadata-on-the-start-system)
*   [2\. Copyright (Part B in the form)](#2-copyright-part-b-in-the-form)
    *   [What about copyright?](#what-about-copyright)
    *   [Who should sign the copyright form?](#who-should-sign-the-copyright-form)
*   [3\. Main paper (Part C in the form)](#3-main-paper-part-c-in-the-form)
    *   [What are the page limits?](#what-are-the-page-limits)
    *   [What is the max size of the PDF file?](#what-is-the-max-size-of-the-pdf-file)
    *   [What is the format for the camera-ready copy?](#what-is-the-format-for-the-camera-ready-copy)
    *   [How do I check the format of the camera-ready version before submitting?](#how-do-i-check-the-format-of-the-camera-ready-version-before-submitting)
    *   [How should the final copy differ from the original submission?](#how-should-the-final-copy-differ-from-the-original-submission)
    *   [What are the tips to make my final version more accessible?](#what-are-the-tips-to-make-my-final-version-more-accessible)
    *   [How do I ensure that my file is correctly formatted?](#how-do-i-ensure-that-my-file-is-correctly-formatted)
    *   [What if my paper includes graphics?](#what-if-my-paper-includes-graphics)
    *   [What if my paper’s title or abstract has changed?](#what-if-my-papers-title-or-abstract-has-changed)
*   [4\. The Appendices (As the last part of the pdf file for Part C in the form)](#4-the-appendices-as-the-last-part-of-the-pdf-file-for-part-c-in-the-form)
    *   [Where do the Appendices go?](#where-do-the-appendices-go)
    *   [What’s the page limit of the Appendices?](#whats-the-page-limit-of-the-appendices)
    *   [What template should the Appendices use?](#what-template-should-the-appendices-use)
*   [5\. Additional document for conditionally accepted papers (Part D in the form)](#5-additional-document-for-conditionally-accepted-papers-part-d-in-the-form)
    *   [Who needs to submit a document for Part D?](#who-needs-to-submit-a-document-for-part-d)
    *   [What should the document look like?](#what-should-the-document-look-like)
    *   [What will happen after June 1?](#what-will-happen-after-june-1)
*   [6\. Supplementary material (Part E in the form)](#6-supplementary-material-part-e-in-the-form)
    *   [Where do supplemental materials go?](#where-do-supplemental-materials-go)
    *   [Do I need to submit latex source files?](#do-i-need-to-submit-latex-source-files)
*   [7\. Deadlines](#7-deadlines)
    *   [When and where do I send my final camera-ready paper?](#when-and-where-do-i-send-my-final-camera-ready-paper)
*   [8\. Questions or Comments](#8-questions-or-comments)
*   [A.1: Access the package](#a1-access-the-package)
*   [A.2\. Example 1](#a2-example-1)
*   [A.3: Example 2](#a3-example-2)
*   [A.4: Example 3](#a4-example-3)


Aug 31, 2021 These instructions are adapted from the ones for ACL 2020, EMNLP 2020, NAACL 2021 and ACL 2021.

To submit your camera-ready version, please go to the [softconf site](https://www.softconf.com/emnlp2021/papers/user/scmd.cgi?scmd=reviseSubmissions), click the submission id, and then click “Final Camera Ready Submission”. This document is organized based on the sections in the Final Submission Page. Please note that the following applies to the EMNLP main conference papers and Findings of EMNLP papers. It will also apply to EMNLP workshop papers unless the workshops have their own instructions.

Please remember to use the template files for the conference and follow the instructions in this document. In addition, you need to run a tool called [aclpub_check](https://github.com/yz-joey/ACLPUB/blob/master/aclpub_check/formatchecker.py) developed by the NAACL2021 publication chairs to automate the checking for some frequently encountered formatting issues. For details of the tool, see Section 3 and the Appendix. Camera-ready copies that fail to meet these instructions will be returned for re-submission.

## 1\. Metadata (Part A in the final submission form)

### Can I make changes to the author list in the camera-ready version?

No, you cannot change the author list. In fact, the authors’ field will not be editable in the final submission form.

### How should I enter metadata on the START system?

The metadata (title, author, abstract) that you enter into START is very important, because it is used on the conference website, proceedings, handbook, mobile app, and the [ACL Anthology](http://www.aclweb.org/anthology/) (and propagates to Google Scholar, etc.).

Before the metadata is entered, please have all authors ensure that the name in their START profile (User Console, Update Profile) appears exactly the way that they want it to appear.

*   Unicode (UTF-8) can be used for accented or special characters.
*   Ordinarily, names are **NOT** written in all caps or all lowercase.
*   The “Last Name” is the name(s) by which your paper is to be cited. It is usually a family name, even for authors from cultures where the family name is written first.
*   The “First Name” is usually a given name or names, including middle names/initials.

The metadata should be written using Unicode (UTF-8) with LaTeX commands. Please try to follow these guidelines:

*   In titles, please capitalize the first word, the first word after a colon (:), and all other words (including hyphenated words like Mixed-Case), except the function words: **articles, pronouns, conjunctions, prepositions, particles, subordinating conjunctions, and the infinitive marker “to”.**
*   BibTeX (in many bibliography styles, including ACL’s) lowercases the titles of conference papers, and needs to be told which letters not to lowercase. So if your title has letters that should always be capitals, please protect them with curly braces, like this: _{E}nglish, {C}homsky, {IBM}, {CFG}s, {HMM}s_. Please also protect the first letter after a sentence-final punctuation mark. For example:

_Can {LSTM} Learn to Capture Agreement? {T}he Case of {B}asque Named Entity Extraction from Noisy Input: {S}peech and {OCR}._

It is important to only protect those first letters that belong to the categories exhibited above, i.e., proper names (including language names), acronyms, abbreviations, the first letter after punctuation (such as a colon) and the first letter in a sentence. These curly braces will not appear in the online conference program or proceedings. They will only appear in the BibTeX file that others will use to cite your paper.

*   If you need literal curly braces, please escape them like this: { }
*   Please don’t use any nonstandard LaTeX commands, and there should be no \footnote or citations using \cite or related commands.
*   You can use LaTeX math mode where appropriate: An $O(n^2)$ Algorithm for $n$-gram Smoothing.
*   You can use Unicode (UTF-8) for accented or special characters.
*   If you copy-and-paste from your PDF file, please be sure to rejoin words broken by hyphenation.

### Name change policy

If you have changed your name and you are concerned that your previous name is being cited in EMNLP publications, email the EMNLP publication chairs by **September 12, 2021** (the sooner the better!). We will search the proceedings and request the authors to change the citations before it gets published to ACL anthology. However, we cannot guarantee that the authors who miscited you comply.

Please see the NAACL 2021 blog post about the first iteration of this policy for more details:
https://2021.naacl.org/blog/name-change-procedure/

## 2\. Copyright (Part B in the form)

### What about copyright?

When you submit the paper, you will be asked to sign the ACL Copyright Transfer Agreement **on behalf of all authors**, electronically (via the [START Conference Manager](https://www.softconf.com/acl2021/papers/)). Authors retain many rights under this agreement and it is appropriate in the vast majority of cases. Please contact the publication chairs with any concerns regarding copyright.

### Who should sign the copyright form?

Before signing this form, please confirm with your co-authors (and, if applicable, your and their employers) that they authorize you to sign on their behalf. Only the authorized representative needs to sign the copyright form. Please sign your full name (not just your first or last initials).

## 3\. Main paper (Part C in the form)

### What are the page limits?

For both long and short papers, EMNLP 2021 allows one extra page to help address reviewer comments. Please use the extra space to help address reviewer comments. Long papers are permitted at most **9 pages** of text and short papers may use up to **5 pages** of text, plus unlimited space for references and the impact statement. Acknowledgements count toward the page limit.

### What is the max size of the PDF file?

The max size of the PDF file (including the Appendices, see Section 4) should be no more than **20MB**.

### What is the format for the camera-ready copy?

The file must be in Portable Document Format (PDF) on A4 paper. We require the use of ACL LaTeX style files or Microsoft Word style files tailored for this year’s ACL conference. You can access the style files and detailed formatting instructions here: [https://2021.emnlp.org/call-for-papers/style-and-formatting](https://2021.emnlp.org/call-for-papers/style-and-formatting) or [https://www.overleaf.com/latex/templates/emnlp-2021-template/hqchdxrsnwjs](https://www.overleaf.com/latex/templates/emnlp-2021-template/hqchdxrsnwjs). If you are using LaTeX, please create the PDF file with pdflatex or xelatex. This ensures use of the proper Type 1 fonts and also takes advantage of other PDF features. You will have the best results using a modern LaTeX distribution, in particular, [TeX live](http://www.tug.org/texlive/). Using the geometry package to set the A4 format is recommended.

### How do I check the format of the camera-ready version before submitting?

You should check the paper format according to this instruction page and use the style template files with the links above. The NAACL2021 publication chairs have developed a package called [aclpub_check](https://github.com/yz-joey/ACLPUB/blob/master/aclpub_check/formatchecker.py) to automate much of the format checking (See the Appendix for details). Please run this package before submitting your paper to softconf in order not to miss some subtle formatting details.

### How should the final copy differ from the original submission?

The camera-ready version of your paper should incorporate the comments of the reviewers as well as other changes you see fit to make. In addition, be sure to do all of the following:

*   Ensure that your paper conforms to the [provided styles, font and page size](https://2021.emnlp.org/call-for-papers/style-and-formatting).
*   Include the authors’ names and affiliations under the title. Note that the list of authors should be identical to the list specified when submitting the paper and should be in the same order.
*   De-anonymize references to your own work in the body of the paper.
*   Where appropriate, add acknowledgments for colleagues, reviewers, and grants. Do not number the Acknowledgements section. Please note that the acknowledgement section should fit within the allowed page limits (9 pages for long and 5 pages for short papers, plus unlimited pages for the impact statement and references) and be in the same font as the rest of the paper.
*   Ensure that all tables, graphs, and figures are readable at standard resolutions.
*   The Appendix (if exists) should appear after the references, as part of the same PDF file (see Section 4); in contrast, the supplemental materials should appear as separate zip files (see Section 5).

### What are the tips to make my final version more accessible?

As a central venue of publication for our community, please prioritise the accessibility of your final version. The Diversity & Inclusion committee for ACL 2020 has outlined some tips on how to do this: [https://acl2020.org/blog/accessibility-for-camera-ready/](https://acl2020.org/blog/accessibility-for-camera-ready/)

### How do I ensure that my file is correctly formatted?

You need to run the [aclpub_check](https://github.com/yz-joey/ACLPUB/blob/master/aclpub_check/formatchecker.py) package (see the Appendix), and pay special attention to things like the following:

*   **The paper size**: Your paper needs to be formatted to A4\. Here are a couple of ways to check this:
    *   Using pdfinfo. The pdfinfo command should include "Page size: 595.276 x 841.89 pts" in its output.
    *   Using Apple's Preview.app. Open the PDF, and type Ctrl-I. It should report the correct page size.
    *   Using Adobe Acrobat. Open the PDF, navigate to File, Properties..., Description. The field labeled "Page Size" should read 8.27 x 11.69 inches in.
*   **Embedding fonts**: You can check your final PDF with the command "[pdffonts](https://www.xpdfreader.com/download.html) mypaper.pdf" and confirm that all the fonts say "yes" under "emb". START will not let you upload your final PDF otherwise. If you are including graphics with the PDF extension, these files must also have embedded fonts. If your paper uses Asian fonts, they must be embedded in the PDF file so that they can be displayed by non-Asian versions of the PDF reader (Asian versions ship with a larger set of default fonts.)
*   **Long titles**: The title should **NOT** exceed the left & right margins. Fold a long title into multiple lines if necessary.
*   **Margins**: The margins of the text area must be reserved as specified in the style file.
*   **Page numbers**: DO **NOT** provide page numbers for your PDF file. The page numbers will be generated automatically while compiling the proceedings.
*   **Consistent Author Names**: The author names must be consistent everywhere and be the same as registered to the submission page(s), and have the same spelling style in all accepted papers. This can avoid generating non-unique Author Index entries for authors with more than one accepted paper. Be sure to ask your co-authors whether you enter their names correctly.

### What if my paper includes graphics?

Remember that you are providing a camera-ready copy. Thus, artwork and photos should be included directly in the paper in their final positions. Ideally, you should use vector graphic formats (PDF, EPS), which allow the graphics to scale arbitrarily. Avoid GIF or JPEG images that are low resolution or highly compressed.

Your paper must look good both when printed (A4 size) and when viewed on screen as PDF (zoomable to any size, color okay). Thus, you may want to use color high-resolution graphics, allowing readers to zoom in on a graph and study it. However, please check that the same graph or photograph is legible when printed and in a PDF viewer at different resolutions. Don’t go overboard on resolution; keep file sizes manageable. Note that vector graphics (e.g., encapsulated PostScript) look good at any scale and take up little space (unless you are plotting many thousands of data points).

### What if my paper’s title or abstract has changed?

In addition to edit the title/abstract in the main paper, please also remember to edit those metadata fields when you upload the camera-ready version, so that they will appear correctly in the table of contents, author index, conference schedule, etc. **Please also note that your name will appear in conference metadata as you have configured it in START**, so make sure that it is correct there (e.g., capitalization, full name, etc.). You can change this on the [user settings](https://www.softconf.com/emnlp2021/super/scmd.cgi?ucmd=updateProfile) page of the START conference manager, under “User” -> “Account Information” -> “Update Profile” .

## 4\. The Appendices (As the last part of the pdf file for Part C in the form)

Appendices are for things such as lemmas, hyperparameters, formulas, proofs, and tables that are informative but not critical to the understanding of the paper.

### Where do the Appendices go?

Appendices should be part of the PDF file uploaded to Part C in the form. It should appear at the end of the PDF file, after the references.

### What’s the page limit of the Appendices?

The Appendices do not count towards the page limit of the main paper, as recommended by the publication chairs.

### What template should the Appendices use?

The Appendices should use exactly the same template as the main paper (See Section 3).

## 5\. Additional document for conditionally accepted papers (Part D in the form)

### Who needs to submit a document for Part D?

That depends on the status of your paper:

*   If the status is Accept-Conditional or Accept-Findings-Conditional, you must submit an additional document (explained below).
*   If the status is Accept or Accept-Findings, please do NOT upload any documents to Part D even if your paper receives an EC review and/or an EC metareview. You can skip this section.

### What should the document look like?

In this document, authors need to provide a short document that explains how they have made the changes requested by the **EC meta-reviews (which appears at the bottom of all other reviews and has a special heading)**. The document can be either a plain text file or a PDF file, and should list each of the concerns from the original EC meta-review along with a short summary of what was done to remedy the concern.

To make this as straightforward as possible, we recommend copying and pasting the contents of the EC meta-review into the document and then describing the action taken after each item in the EC metareview. If there are additional issues mentioned in EC reviews that were not included in the EC metareview, authors may choose to address those points as well; however, only the points mentioned in the EC meta-review will be the basis of whether the final version of the paper will be accepted. This explanatory document will not be made public; it is just to expedite the conditional acceptance workflow for the EC’s review process.

The size of this document should be no more than **10MB**.

### What will happen after September 9?

The EC chairs will go over this document and check the camera-ready version to determine whether the required changes have been included in the camera-ready version. If so, the condition will be removed, the paper will be accepted to the main conference or Findings, and the status of having been conditionally accepted will not be publicly visible. If not, the paper will be rejected. The PCs will inform the authors of the final EC decisions by **September 16, 2021**.

If you have any questions about EC reviews or the changes required by EC, you can contact the EMNLP 2021 Ethics Chairs. You can also check the Ethics FAQ at [https://2021.emnlp.org/call-for-papers#ethics-policy](https://2021.emnlp.org/call-for-papers#ethics-policy).

## 6\. Supplementary material (Part E in the form)

### Where do supplemental materials go?

Supplemental material contains software and data uploaded separately as zip files. The maximum size of a zip file is **20MB**.

### Do I need to submit latex source files?

No. Latex files will not be used in ACL Anthology, thus please do NOT submit them.

## 7\. Deadlines

### When and where do I send my final camera-ready paper?

You must submit the final version of your paper by **September 9, 2021** (11:59pm, UTC-12 hours, “anywhere on Earth”) by navigating to the EMNLP 2021 [START login page](https://www.softconf.com/emnlp2021/papers/) and following the internal links. This is a firm deadline, i.e., no change will be accepted after that.

## 8\. Questions or Comments

If you have any questions about:

*   the camera-ready version including running the aclpub_check package: please contact our [publication chairs](https://2021.emnlp.org/organizers#pubchairs).
*   the EC issues and additional document in Part D: please contact the [EC chairs](https://2021.emnlp.org/organizers#ethicschairs)

Please do NOT contact EMNLP PCs unless your questions cannot be answered by the publication chairs or the EC committee.

Appendix: Checking the format with the aclpub_check package

This appendix is modified from the document of the NAACL 2021 publication chairs at: [https://docs.google.com/document/d/1MYKGS8x17Mvl4fKYz_ZHIkre9KBhzB_9W87bu4rbtqI/edit](https://docs.google.com/document/d/1MYKGS8x17Mvl4fKYz_ZHIkre9KBhzB_9W87bu4rbtqI/edit)

Following NAACL 2021, we are using a package called “aclpub_check” that automatically detects author formatting errors, margin violations as well as many other common formatting errors. Before submitting your paper to softconf, please run the package first and fix the detected errors.

## A.1: Access the package

The package is written in Python and there are four steps to using it:  
1: git clone [https://github.com/acl-org/ACLPUB](https://github.com/acl-org/ACLPUB)  
2: cd ACLPUB  
3: pip install -e .  
4: python3 aclpub_check/formatchecker.py –paper_type PAPER_TYPE PAPER_NAME.pdf  


**PAPER_TYPE should be the word short or long. PAPER_NAME can be any valid file name.**

Below, we are walking you through how to use the tool by considering three papers published by publication chairs at NAACL 2021.

## A.2\. Example 1

First, consider Josef Valvoda’s paper “What About the Precedent: An Information-Theoretic Analysis of Common Law”

> python3 aclpub_check/formatchecker.py –paper_type long precedent.pdf

Checking precedent.pdf  
**Error (Margin)**: An image on page 1 bleeds into the margin.

We detected 1 error and 0 warnings in your paper.

Thus, we see this paper has a margin violation. The script output a png called “errors-precedent-page-1.png” which you can see below:

![c1](Instruction%20for%20Camera-Ready%20Submission%20-%20ACL-IJCNLP%202021_files/c1.png)

It shows that Josef has to shrink the first-page picture to make the paper compliant with the NAACL formatting rules. This is easily remedied with the adjustbox [https://www.ctan.org/pkg/adjustbox](https://www.ctan.org/pkg/adjustbox) package or a similar bit of LaTeX.

## A.3: Example 2

Next, consider Tiago Pimentel and Irene Nikkarinen’s paper: “How (Non-)Optimal is the Lexicon?”

> python3 aclpub_check/formatchecker.py –paper_type long lexicon.pdf

Checking lexicon.pdf  
**Error (Margin)**: Text on page 13 bleeds into the margin.

This time, the automatically generated png shows me that the authors didn’t keep some math equations out of the margin in a proof in the appendix.

![c2](Instruction%20for%20Camera-Ready%20Submission%20-%20ACL-IJCNLP%202021_files/c2.png)

Here, it’s likely that the equations have to be broken over two lines.

## A.4: Example 3

Finally, consider Jennifer White’s paper “A Non-Linear Structural Probe”

> python3 aclpub_check/formatchecker.py –paper_type short structural.pdf

Checking structural.pdf

**All Clear!**

So, there were no mistakes!

The script checks for many violations, e.g. page-limit violations, font and font size violations and even a few common typos. The script even makes recommendations about citing non-arXiv versions of papers. These, however, are simply warnings:

**Warning (Bibliography)**: It appears you are using arXiv links more than you should (18/55). Consider using ACL Anthology DOIs instead.

