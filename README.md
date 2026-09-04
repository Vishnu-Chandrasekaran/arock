# Unified Initiatives Hub

Merge ACT India, LIRA, and the Main Arockyaa Charitable Trust Website into One Codebase

I have three Lovable applications that currently exist as separate projects:

Main / Parent Website
https://connect-initiatives.lovable.app

ACT India Website
https://linden-growth-hub.lovable.app/

LIRA Website
https://trust-shapers.lovable.app/

I want to consolidate all three websites into one unified codebase and one Lovable project, while preserving the existing design, content, functionality, responsive behavior, and branding of each section.

1. Main Website Structure

The main website is the landing/parent website for:

Arockyaa Charitable Trust

It should remain the primary entry point.

The main page should contain two clearly separated initiative cards/sections:

ACT India

Description:
Social welfare programs, community development, grassroots initiatives, and impact-driven projects across Tamil Nadu.

The Explore ACT India button MUST navigate to:

https://linden-growth-hub.lovable.app/

LIRA

Full name:
Linden Institute of Research and Academy

Description:
Research excellence, academic programs, knowledge creation, and institutional learning for sustainable development.

The Explore LIRA button MUST navigate to:

https://trust-shapers.lovable.app/

IMPORTANT:
The current links appear to be reversed, so correct them.

Explore ACT India → https://linden-growth-hub.lovable.app/

Explore LIRA → https://trust-shapers.lovable.app/

2. Convert Everything into One Codebase

Do NOT simply keep the three websites as separate external links.

Instead, migrate/merge the functionality and UI of all three existing Lovable projects into this single application/codebase.

The final application should contain:

Arockyaa Charitable Trust main/parent section

ACT India section

LIRA section

All existing pages from each project

All existing components

Existing navigation

Existing forms

Existing images/assets

Existing styling

Existing responsive layouts

Existing animations/interactions

Existing content

Existing functionality

Do not unnecessarily redesign the existing websites.

The goal is consolidation and correct routing, not a visual redesign.

3. Use Internal Routing

After the migration, ACT India and LIRA should be part of the same application.

Use clean internal routes instead of relying on the three Lovable domains.

Suggested structure:

/
→ Arockyaa Charitable Trust homepage

/act-india
→ ACT India homepage

/lira
→ LIRA homepage

If the existing projects contain additional pages, preserve their structure underneath their respective sections.

For example:

/act-india/about
/act-india/programs
/act-india/projects

and:

/lira/about
/lira/research
/lira/academy

Use the actual pages and navigation discovered from the existing projects rather than inventing unnecessary pages.

4. Navigation

Create a consistent global navigation system.

The parent site should allow users to move easily between:

Arockyaa Charitable Trust

ACT India

LIRA

ACT India pages should have a clear way to return to the main Arockyaa Charitable Trust site.

LIRA pages should also have a clear way to return to the main Arockyaa Charitable Trust site.

Avoid duplicated or conflicting navigation systems where possible.

5. Preserve Branding

Keep each initiative's existing identity.

Arockyaa Charitable Trust

Maintain the existing parent organization branding and messaging.

ACT India

Maintain its existing:

Logo

Colors

Typography

Visual identity

Content

Images

Program/project presentation

LIRA

Maintain its existing:

Logo

Colors

Typography

Visual identity

Content

Images

Research/academic presentation

Do not merge the visual identities into one generic design.

They should feel like three connected sections of the same organization, while still retaining their individual branding.

6. Assets

Audit all three existing applications and migrate the required assets into the unified project.

This includes:

Logos

Images

Icons

Fonts

SVGs

Background images

Other static assets

Do not replace existing assets with placeholders unless an asset is genuinely unavailable.

Avoid broken image URLs and missing assets.

7. Components and Code Quality

Create a clean shared architecture.

Reuse common components where appropriate, such as:

Header

Footer

Buttons

Cards

Typography

Layout containers

Responsive navigation

Forms

SEO components

But do NOT force ACT India and LIRA to use identical components when their existing designs or functionality are different.

Organize the code logically, for example:

src/

components/

layouts/

pages/

routes/

sections/

assets/

styles/

Use reusable components where this improves maintainability.

Remove unnecessary duplicated code after migration.

8. Routing Requirements

Implement proper client-side routing.

Requirements:

/ loads Arockyaa Charitable Trust

/act-india loads ACT India

/lira loads LIRA

Existing internal pages continue to work

Browser refresh must work on every route

No blank pages

No 404 errors caused by client-side routing

Navigation must not unnecessarily reload the entire application

Use the routing solution already used by the project where practical.

9. External Domain Compatibility

During migration, make sure the old Lovable URLs can be handled gracefully.

If possible, provide redirects or equivalent migration behavior from:

https://linden-growth-hub.lovable.app/

to the new ACT India route:

/act-india

and from:

https://trust-shapers.lovable.app/

to:

/lira

Do not break existing links unnecessarily.

If redirects cannot be configured from within the application, clearly identify what needs to be configured at the hosting/domain level.

10. Content Integrity

Do not invent or rewrite the organization's content during the migration.

Copy the existing content from each application accurately.

Do not remove:

Sections

Pages

Important calls-to-action

Forms

Contact information

Project information

Research information

Program information

Footer information

unless there is a clear technical reason.

If duplicate content exists between projects, consolidate it intelligently without losing information.

11. Responsive Design

The final unified application must work properly on:

Mobile

Tablet

Laptop

Desktop

Large screens

Check:

Navigation

Hero sections

Cards

Images

Forms

Buttons

Footer

Typography

Spacing

Overflow

Mobile menus

Do not allow horizontal scrolling caused by the migration.

12. SEO

Preserve and improve SEO structure.

Each major section should have appropriate:

Page title

Meta description

Open Graph metadata

Canonical URL where appropriate

Semantic headings

Image alt text

Use unique metadata for:

Arockyaa Charitable Trust

ACT India

LIRA

13. Final Link Behavior

The parent homepage must have exactly this logical behavior:

Explore ACT India
→ /act-india

Explore LIRA
→ /lira

Do NOT leave these buttons pointing to the old external Lovable applications after the migration.

The old URLs are source applications to be consolidated, not the final navigation destinations.

14. Important Migration Process

Before making changes:

Inspect the existing main application.

Inspect the ACT India application.

Inspect the LIRA application.

Identify all pages, routes, components, assets, styles, and functionality.

Create a migration plan.

Merge the applications carefully.

Implement internal routing.

Fix the currently reversed ACT India/LIRA links.

Test every page and navigation path.

Check mobile and desktop layouts.

Check console errors.

Check broken links and missing assets.

Verify forms and interactive functionality.

Verify that direct URL navigation and browser refresh work.

Only then finalize the unified application.

15. Do Not Do These Things

Do not create three separate applications again.

Do not use iframes to embed the old websites.

Do not simply redirect users to the old Lovable applications.

Do not discard existing pages or functionality.

Do not replace existing designs unnecessarily.

Do not invent content.

Do not use placeholder images when existing assets are available.

Do not break responsive behavior.

Do not leave ACT India and LIRA links reversed.

Do not duplicate large amounts of code unnecessarily.

Final Objective

The final result should be:

One Lovable project
→ One codebase
→ One deployed application
→ Three connected experiences

Structure:

Arockyaa Charitable Trust

Home

ACT India

All existing ACT India pages/features

LIRA

All existing LIRA pages/features

The user should feel that ACT India and LIRA are two official initiatives under Arockyaa Charitable Trust, rather than three unrelated websites.

Before completing the task, provide a concise summary of:

What was migrated

What routes were created

What links were corrected

What components were consolidated

Any functionality that could not be migrated automatically

Any hosting/domain configuration that still needs to be done

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://unified-trust-paths.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/28b51bb6-a634-4dd8-80dd-ad341e4df716).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
