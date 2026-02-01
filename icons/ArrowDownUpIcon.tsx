export const ArrowDownUpIcon = ({
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
    className="lucide lucide-arrow-down-up-icon lucide-arrow-down-up"
  >
    <path d="m3 16 4 4 4-4" />
    <path d="M7 20V4" />
    <path d="m21 8-4-4-4 4" />
    <path d="M17 4v16" />
  </svg>
);
