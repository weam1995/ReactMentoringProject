interface GenreSelectProps{
    genreList: string[],
    selectedGenre: string,
    onSelect: (genre: string) => React.MouseEventHandler<HTMLLIElement>;
}