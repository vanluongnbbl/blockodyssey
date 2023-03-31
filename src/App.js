import Tree from './components/Tree/Tree';

const parents = [
  {
    name: 'Node 1',
    descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
    childs: [
      {
        name: 'Node 1.1',
        descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        childs: [
          {
            name: 'Node 1.1.1',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
          },
          {
            name: 'Node 1.1.2',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
          },
          {
            name: 'Node 1.1.3',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
            childs: [
              {
                name: 'Node 1.1.3.1',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
              {
                name: 'Node 1.1.3.2',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
              {
                name: 'Node 1.1.3.3',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
              {
                name: 'Node 1.1.3.4',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
              {
                name: 'Node 1.1.3.5',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
            ],
          },
          {
            name: 'Node 1.1.4',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
          },
        ],
      },
      {
        name: 'Node 1.2',
        descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
      },
      {
        name: 'Node 1.3',
        descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
      },
      {
        name: 'Node 1.4',
        descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        childs: [
          {
            name: 'Node 1.4.1',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
          },
          {
            name: 'Node 1.4.2',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
            childs: [
              {
                name: 'Node 1.4.2.1',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
              {
                name: 'Node 1.4.2.2',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
              {
                name: 'Node 1.4.2.3',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
                childs: [
                  {
                    name: 'Node 1.4.2.3.1',
                    descriptions:
                      'At vero eos et accusamus et iusto odio dignissimos',
                  },
                  {
                    name: 'Node 1.4.2.3.2',
                    descriptions:
                      'At vero eos et accusamus et iusto odio dignissimos',
                  },
                ],
              },
              {
                name: 'Node 1.4.2.4',
                descriptions:
                  'At vero eos et accusamus et iusto odio dignissimos',
              },
            ],
          },
          {
            name: 'Node 1.4.3',
            descriptions:
              'At vero eos et accusamus et iusto odio dignissimos',
          },
        ],
      },
      {
        name: 'Node 1.5',
        descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
      },
    ],
  },
]

/*
  1. In which point, did you feel hard?
    Answer: No
  2. If you have more time to do this, what will you improve in your code?
    Answer: 
      1.  Use Icons: Instead of using the "+" and "-" signs, I can use icons to represent the expand 
          and collapse functionality. This will make it more visually appealing and intuitive for the user.
      2.  Add Animations: I can add subtle animations when a node is expanded or collapsed. 
          This will provide a better user experience and make the tree feel more dynamic.
      3.  Improve Responsiveness: Ensure that the tree diagram is responsive and works well on different 
          screen sizes. I can also add support for touch events to make it easier to use on mobile devices.
      4.  Use Color and Typography: Use color and typography to create a hierarchy within the tree diagram. 
          This will make it easier for users to navigate and understand the relationships between different nodes.
*/  

function App() {
  return (
    <div className="App">
      <Tree data={parents} />
    </div>
  );
}

export default App;
