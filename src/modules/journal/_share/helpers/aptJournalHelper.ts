let aptJournalHelper = {
    convertDataToHtml: convertDataToHtml
}
export default aptJournalHelper;

function convertDataToHtml(data: any): string {
    let html = "";
    var sections = data.sections;
    for (var k = 0; k < sections.length; k++) {
        html += sectionToHtml(sections[k]);
    }
    return html;

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

        console.log(dataIdAttr);

        return String.format('<{0} {1} {2} {3} {4}>{5}</{0}>', "p", dataIdAttr, dataTagAttr, showByFilterAttr, paragraphAttr, inlinesHtml);
    }

    function getInlinesHtml(paragraph: any) {
        var inlinesHtml = '';
        for (var j = 0; j < paragraph.inlines.length; j++) {
            inlinesHtml += inlineToHtml(paragraph.inlines[j]);
        }
        if (inlinesHtml.trim() === '') inlinesHtml = "<br>";
        return inlinesHtml;
    }

    function inlineToHtml(inline: any) {
        if (inline.type === "Run") {
            var startTags = '';
            var endTags = '';

            if (inline.text != null && inline.text !== '') {
                if (inline.textDecoration === 1) {
                    startTags += String.format('<{0}>', "u");
                    endTags += String.format('</{0}>', "u");
                }

                if (inline.fontStyle === 1) {
                    startTags += String.format('<{0}>', "em");
                    endTags += String.format('</{0}>', "em");
                }

                if (inline.fontWeight === 1) {
                    startTags += String.format('<{0}>', "strong");
                    endTags += String.format('</{0}>', "strong");
                }

                return startTags + inline.text + endTags;
            }
            return '';
        } else if (inline.type === "LineBreak") {
            return '<br>';
        }
        return null;
    }
}