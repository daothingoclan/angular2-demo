let aptJournalHelper = {
    appJournalToHtml: appJournalToHtml
}
export default aptJournalHelper;

function appJournalToHtml(item: any): string {
    let headerHtml = String.format("<h4><strong>{0} By {1}</strong></h4>", Date.format(item.start, "dd.mm.yyyy"), item.user.initials);
    let sectionsHtml = "";
    var sections = item.journal.data.sections;
    for (var k = 0; k < sections.length; k++) {
        sectionsHtml += sectionToHtml(sections[k]);
    }
    return String.format(
        "<div id='{0}'>{1}{2}</div>",
        item.id,
        headerHtml,
        sectionsHtml
    );

    function sectionToHtml(section: any) {
        var htmlParagraphs = '';
        var paragraphs = section.paragraphs;

        for (var i = 0; i < paragraphs.length; i++) {
            htmlParagraphs += paragraphToHtml(paragraphs[i]);
        }

        return htmlParagraphs;
    }

    function paragraphToHtml(paragraph: any) {
        var dataIdAttr = String.format('{0}="{1}"', "data-id", paragraph.id);
        var dataTagAttr = String.format('{0}="{1}"', "data-tag", paragraph.tags);
        var showByFilterAttr = String.format('{0}="{1}"', "data-show-by-filter", paragraph.showByFilter ? true : false);
        var paragraphAttr = String.format('{0}=""', "data-paragraph");
        var inlinesHtml = getInlinesHtml(paragraph);
        return String.format('<{0} {1} {2} {3} {4}>{5}</{0}>', "p", dataIdAttr, dataTagAttr, showByFilterAttr, paragraphAttr, inlinesHtml);
    }

    function getInlinesHtml(paragraph: any) {
        var inlinesHtml = '';
        for (var j = 0; j < paragraph.inlines.length; j++) {
            inlinesHtml += inlineToHtml(paragraph.inlines[j]);
        }
        if (inlinesHtml.trim() === '') { inlinesHtml = "<br>"; }
        return inlinesHtml;
    }

    function inlineToHtml(inline: any) {
        if (inline.type === "LineBreak") {
            return '<br>';
        }
        if (inline.type === "Run") {
            var startTags = '';
            var endTags = '';

            if (inline.text == null || inline.text == '') {
                return "";
            }
            if (inline.textDecoration === 1) {
                startTags += '<u>';
                endTags += '</u>';
            }

            if (inline.fontStyle === 1) {
                startTags += '<em>';
                endTags += '</em>';
            }

            if (inline.fontWeight === 1) {
                startTags += '<strong>';
                endTags += '</strong>';
            }

            return startTags + inline.text + endTags;
        }
        return null;
    }
}