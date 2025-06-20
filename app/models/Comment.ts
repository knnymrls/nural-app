export interface Comment {
  id: string;
  post_id: string;
  author_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  author?: {
    id: string;
    name: string;
    avatar_url: string | null;
  };
  mentions?: Array<{
    id: string;
    profile_id?: string;
    project_id?: string;
    profile?: {
      id: string;
      name: string;
    };
    project?: {
      id: string;
      title: string;
    };
  }>;
}