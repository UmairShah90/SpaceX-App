import gql from "graphql-tag";

export const ROCKET_INFO = gql`
  query Rockets {
    rockets {
      active
      rocket_id
      flickr_images
      rocket_name
    }
  }
`;
