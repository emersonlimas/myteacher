export const FormatterService = {
    monetaryValue(value: number): string {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL'});
    },
    limiterText(text: string, maximumlenght: number): string {
        if (text.length < maximumlenght) {
            return text;
        }

        return text.slice(0,maximumlenght) + '...';
    }
}