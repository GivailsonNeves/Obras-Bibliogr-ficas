import { AuthorUtil } from "./author-util";

describe('author-util', () => {

    const authorName: string = "fulano da silva tal";
    const expectedAuthorName: string = "TAL, Fulano da Silva";

    const authorNameComplemented: string = "fulano da silva tal junior";
    const expectedAuthorNameComplemented: string = "TAL JUNIOR, Fulano da Silva";

    it('should return a valid string', () => {
        expect(AuthorUtil.formatName(authorName)).not.toBe("");
        expect(AuthorUtil.formatName(authorName)).not.toBe(" ");
        expect(AuthorUtil.formatName(authorName)).not.toBeNull();
    });

    it('should return an array of words', () => {
        expect(AuthorUtil.nameToStringArray(authorName).length).toBe(4);
        expect(AuthorUtil.nameToStringArray("").length).toBe(0);
    });

    it('should capitalize words', () => {
        expect(AuthorUtil.capitalizeWord("souza")).toBe("Souza");
        expect(AuthorUtil.capitalizeWord("SOUZA")).toBe("Souza");
        expect(AuthorUtil.capitalizeWord("Souza")).toBe("Souza");
        expect(AuthorUtil.capitalizeWord("DE")).toBe("de");
        expect(AuthorUtil.capitalizeWord("das")).toBe("das");
    });

    it('should check coplement word', () => {
        expect(AuthorUtil.isComplementSurname(AuthorUtil.COMPLEMENT_SURNAME[3])).toBeTruthy();
        expect(AuthorUtil.isComplementSurname(AuthorUtil.COMPLEMENT_SURNAME[5])).toBeTruthy();
        expect(AuthorUtil.isComplementSurname("Souza")).toBeFalsy();
        expect(AuthorUtil.isComplementSurname("de")).toBeFalsy();
        expect(AuthorUtil.isComplementSurname("DAS")).toBeFalsy();
    });

    it('should return a correct Author Name', () => {
        expect(AuthorUtil.formatName(authorName)).toBe(expectedAuthorName);
        expect(AuthorUtil.formatName(authorNameComplemented)).toBe(expectedAuthorNameComplemented);
        expect(AuthorUtil.formatName("silva")).toBe("SILVA");
        expect(AuthorUtil.formatName("josé silva")).toBe("SILVA, José");
        expect(AuthorUtil.formatName("de")).toBe("DE");
    });

});