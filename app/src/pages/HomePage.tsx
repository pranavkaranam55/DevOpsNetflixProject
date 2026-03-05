import Stack from "@mui/material/Stack";
import { COMMON_TITLES } from "src/constant";
import HeroSection from "src/components/HeroSection";
import { genreSliceEndpoints, useGetGenresQuery } from "src/store/slices/genre";
import { MEDIA_TYPE } from "src/types/Common";
import { CustomGenre, Genre } from "src/types/Genre";
import SliderRowForGenre from "src/components/VideoSlider";
import store from "src/store";

export async function loader() {
  await store.dispatch(
    genreSliceEndpoints.getGenres.initiate(MEDIA_TYPE.Movie)
  );
  return null;
}

export function Component() {
  const { data: genres, isSuccess } = useGetGenresQuery(MEDIA_TYPE.Movie);

  return (
    <Stack spacing={2}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        DevOps CI/CD Pipeline Working 🚀
      </h1>

      {isSuccess && genres && genres.length > 0 && (
        <>
          <HeroSection mediaType={MEDIA_TYPE.Movie} />

          {[...COMMON_TITLES, ...genres].map((genre: Genre | CustomGenre) => (
            <SliderRowForGenre
              key={genre.id || genre.name}
              genre={genre}
              mediaType={MEDIA_TYPE.Movie}
            />
          ))}
        </>
      )}
    </Stack>
  );


  return null;
}

Component.displayName = "HomePage";