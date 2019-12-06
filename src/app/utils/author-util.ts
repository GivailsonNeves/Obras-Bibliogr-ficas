
export class AuthorUtil {

    public static readonly COMPLEMENT_SURNAME: string[] = ["FILHO", "FILHA", "NETO", "NETA", "SOBRINHO", "SOBRINHA", "JUNIOR"];
    public static readonly SEPARATOR_SURNAME: string[] = ["da", "de", "do", "das", "dos"];

    private constructor() {}

    public static nameToStringArray(name: string): string[] { return name ? name.split(" ") : [] }

    public static capitalizeWord(word: string): string {
        const lowerCaseWord: string = word.toLowerCase();
        return AuthorUtil.SEPARATOR_SURNAME.indexOf(lowerCaseWord) !== -1
            ? lowerCaseWord
            : lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.substring(1);
    }

    public static isComplementSurname(surname: string): boolean {
        return AuthorUtil.COMPLEMENT_SURNAME.indexOf(surname.toUpperCase()) !== -1;
    }

    public static formatName(authorName: string) {
        const vectoredName: string[] = AuthorUtil.nameToStringArray(authorName);

        if (vectoredName.length < 2) return authorName.toUpperCase();
        else {
            const lastSurName: string = vectoredName[vectoredName.length - 1].toUpperCase();
            const _isComplementSurName: boolean = AuthorUtil.isComplementSurname(lastSurName);
            const lengthToCaptalize: number = _isComplementSurName ? vectoredName.length - 2 : vectoredName.length - 1;
            let firstPartOfName: string = "";

            const surname: string = _isComplementSurName
                ? `${vectoredName[vectoredName.length - 2].toUpperCase()} ${lastSurName}`
                : lastSurName;

            for (let i = 0; i < lengthToCaptalize; i++) {
                firstPartOfName += ` ${AuthorUtil.capitalizeWord(vectoredName[i])}`;
            }

            return `${surname},${firstPartOfName}`;
        }
    }
}