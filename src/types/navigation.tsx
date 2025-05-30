export type RootStackParamList = {
  AllScreens: undefined;
  LoginPage: undefined;
  LandingPage: undefined;
  HomePage: undefined;
ProjectPage: { projectId: number; edit?: boolean };
  SubProjectPage: { projectId: number; edit?: boolean };
    GroupPage: {projectId: number}; 
  Footer: undefined;
  MemberPage: {projectId: number};
  Dms: undefined;
  TeamMemberPage: undefined;
  Back: undefined;
  ProjectInfoPage: {projectId: number}; // expect projectId param here
  MediaPage: {projectId: number};
  Header: undefined;
  UpdatePage: undefined;
  UserProfilePage: undefined;
  MentionPage: undefined;
  Project: undefined;
  ListPage: {projectId: number};
};
