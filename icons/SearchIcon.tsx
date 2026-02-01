export const SearchIcon = ({
  className = "",
  style = {},
  onClick = undefined as undefined | any,
  color = "#000000",
  width = "16",
  height = "16",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search-icon lucide-search"
  >
    <path d="m21 21-4.34-4.34" />
    <circle cx="11" cy="11" r="8" />
  </svg>
);
