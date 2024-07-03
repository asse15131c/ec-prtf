import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MultimediaRow`.
 */
export type MultimediaRowProps = SliceComponentProps<Content.MediaRowSlice>;

/**
 * Component for "MultimediaRow" Slices.
 */
const MultimediaRow = ({ slice }: MultimediaRowProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for multimedia_row (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MultimediaRow;
