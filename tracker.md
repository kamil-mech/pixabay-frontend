# Tracker

I always use this file to keep track of everything that's on my dev plate. I never commit it to the repo, but for the purpose of the demonstration I am showing here how I work

This file has an .md extension for some IDE highlighting, but in general it does not output a pretty .md. We can consider this my custom format, which is a result of years of trying different things as I go. Best viewed in plaintext format

Pixabay Frontend MVP
Wed 06 Jan 2020
Project Day 0
* Spec: https://mail.google.com/mail/u/0/#inbox/FMfcgxwKkRCgnsjVLwqLXvLWCRZXMpsz?projector=1&messagePartId=0.1
* Global requirements:
* - Responsive
* - Rich unit tests
* - Code comments
* Pre-PR checks:
* - Feature branch and clean conventional commits
* - Refers to JIRA ticket
* - Cross-platform (Responsive)
* - Cross-browser
* - Localized
* - Storybooked
* - Unit-tested
* - Uses theme
* - JIRA updated after merge
[x] Setup jira
[~] PXB-1 Setup the repo * https://kmech.atlassian.net/browse/PXB-1
    [x] React (create-react-app)
    [x] Typescript & linting
    [x] Atomic design
    [x] Dummy Components
    [x] Localization (i18next)
    [x] Router
    [x] Storybook
    [x] Style (styled-components) & Theme
    [ ] Store (zustand)
    [ ] Local storage (localforage)
    [~] Unit tests (jest, react-testing-library, msw)
    [ ] Document architectural decisions
[ ] PXB-2 Landing page * https://kmech.atlassian.net/browse/PXB-2
    [ ] Fetch images from Pixabay API
        * Pixabay API documentation: https://pixabay.com/api/docs/
        * Pixabay Key: 6473511-0417f2cad683f1bee54cafe15
    [ ] Setup grid layout for images (like http://www.pixabay.com)
    [ ] Paginate results (page numbers or infinite scroll or other)
[ ] PXB-3 Image page * https://kmech.atlassian.net/browse/PXB-3
    [ ] Display target image (bigger version - perhaps hero)
    [ ] Display details (photographer, tags, views, downloads, size)
[-] Fix HMR in storybook conflicting with MSW
    * Looks like this has nothing to do with MSW:
    * https://github.com/storybookjs/presets/issues/177
    [x] Try SB5 and/or CRA3
        * Still doesn't work

# Appendix (things I learned and reading TODOs)
- Be careful of accidentally nesting routers, causes hard to find bugs
- There must be a bug in react-testing-library, as using a regex on sibling items (e.g /Photos|Illustrations|Vectors|Videos|Music/gi) skips every 2nd item. This can be mitigated by increasing DOM nesting or introducing an interim DOM element as a separator between them
- Storybook's HMR is currently badly broken, it caused my machine to freeze way too many times
- https://pixabay.com/ has plenty of custom paddings, margins, font-sizes and colors. I found myself abusing the theme with `calc` quite a few times to achieve the same looks. Would prefer to stick to the theme and remove those hacks
