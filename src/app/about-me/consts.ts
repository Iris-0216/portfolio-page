export interface TableData {
  title: string;
  items: Array<string>;
}
export const tableData: TableData[] = [
  {
    title: 'Frameworks',
    items: ['Angular', 'Flutter', 'React'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Dart', 'C#', 'Java'],
  },
  {
    title: 'Cloud Computing Platform',
    items: ['AWS', 'Firebase'],
  },
  {
    title: 'Databases',
    items: ['Amazon DynamoDB', 'MySQL', 'SQLite'],
  },
  {
    title: 'Tools',
    items: ['VSCode', 'Git', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
  },
  {
    title: 'Foreign Languages',
    items: ['Japanese', 'English'],
  },
  {
    title: 'Other',
    items: ['Sass/CSS', 'HTML', 'npm', 'RxJS', 'REST API', 'Postman'],
  },
];
