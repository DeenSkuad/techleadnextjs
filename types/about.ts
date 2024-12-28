export interface TabContent {
  id: string;
  title: string;
  content: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  hero2: {
    title: string;
    subtitle: string;
    description: string;
  };
  tabs: TabContent[];
} 