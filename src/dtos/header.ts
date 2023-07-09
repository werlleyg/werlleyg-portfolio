export interface ISubheaderData {
  email: string;
  message: string;
  buttonUrl: string;
}

export interface IProfileData {
  name: string;
  degreeInformation: string;
  socialMedias: ISocialMedia[];
}

export interface ISocialMedia {
  title: string;
  url: string;
  imageUrl: string;
}
