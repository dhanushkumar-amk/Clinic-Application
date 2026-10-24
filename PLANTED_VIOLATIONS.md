# Planted accessibility issues

This ledger is intentionally not linked from the demo site. “Code review” means the issue may require source inspection rather than being consistently emitted by axe-core.

| # | File / element | Violation | WCAG | axe rule / detection |
|---|---|---|---|---|
| 1 | index, hero building image | Missing informative alternative | 1.1.1 | image-alt |
| 2 | index, stethoscope image | Missing informative alternative | 1.1.1 | image-alt |
| 3 | book, phone image | Missing informative alternative | 1.1.1 | image-alt |
| 4 | index, family image | Useless `alt="image"` | 1.1.1 | image-alt / code review |
| 5 | book, email input | Input has no label | 1.3.1, 3.3.2 | label |
| 6 | book, phone input | Input has no label | 1.3.1, 3.3.2 | label |
| 7 | book, insurance input | Input has no label | 1.3.1, 3.3.2 | label |
| 8 | contact, name input | Input has no label | 1.3.1, 3.3.2 | label |
| 9 | contact, email input | Input has no label | 1.3.1, 3.3.2 | label |
| 10 | book, visit type select | Label `for` mismatches select id | 1.3.1 | select-name |
| 11 | book, name and insurance | Duplicate `patient-name` id | 4.1.1 | duplicate-id |
| 12 | index, preventive card | Clickable div lacks semantics/keyboard support | 2.1.1, 4.1.2 | code review |
| 13 | contact, ES language switch | Clickable span lacks semantics/keyboard support | 2.1.1, 4.1.2 | code review |
| 14 | book, circular phone button | Empty button | 4.1.2 | button-name |
| 15 | contact, circular arrow button | Empty button | 4.1.2 | button-name |
| 16 | contact, social icon link | Link has no accessible name | 4.1.2 | link-name |
| 17 | index, “click here” | Vague link text | 2.4.4 | code review |
| 18 | index, “Read more” | Vague link text | 2.4.4 | code review |
| 19 | index, light-purple inline link | Insufficient contrast | 1.4.3 | color-contrast |
| 20 | contact, grey inline status | Insufficient contrast | 1.4.3 | color-contrast |
| 21 | CSS focus rule | Removes focus indicator without replacement | 2.4.7 | code review |
| 22 | services, h1 then h4 | Heading level skipped | 1.3.1 | heading-order |
| 23 | index, opening-hours table | Data table lacks headers | 1.3.1 | code review |
| 24 | contact, document root | Missing `lang` | 3.1.1 | html-has-lang |
| 25 | contact, title | Empty title | 2.4.2 | document-title |
| 26 | contact, page content | No main landmark | 1.3.1 | landmark-one-main |
| 27 | contact, iframe | Map iframe has no title | 4.1.2 | frame-title |
| 28 | contact, round button | Positive tabindex | 2.4.3 | tabindex |
| 29 | contact, round button | Focusable item hidden from assistive tech | 4.1.2 | aria-hidden-focus |
| 30 | book, viewport meta | Disables user scaling | 1.4.4 | meta-viewport |
| 31 | contact | No skip-to-content link | 2.4.1 | bypass |

## Accessible control group

- Every page’s footer uses a proper `footer` landmark, meaningful headings, and textual links.
- The contact page emergency-contact block has a clear heading, plain instructions, and a named `911` link.
- The calendar illustration on the home page and the clinic logo images have useful text alternatives.
