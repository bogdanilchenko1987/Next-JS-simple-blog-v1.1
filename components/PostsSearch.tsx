type Props = {
  onSearch: (value: any) => void;
  search: any;
};

const PostsSearch = ({ onSearch, search }: Props) => {
  return (
    <label className="label" htmlFor="search">
      <b>Find post: </b>
      <input
        type="text"
        name="search"
        placeholder="search"
        value={search}
        onChange={onSearch}
      />
    </label>
  );
};

export { PostsSearch };
