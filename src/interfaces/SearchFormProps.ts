interface SearchFormProps {
    initialSearchQuery: string,
    onSearch : (event:React.FormEvent<HTMLFormElement>) => void;
}