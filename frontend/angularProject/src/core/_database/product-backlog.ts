import { ProductBacklog, StatusType, User } from "src/interfaces/product-backlog";

export const PRODUCT_BACKLOG: ProductBacklog[] = [
  {
    uuid: '0-0-0-1',
    name: 'Nazwa przestrzeni',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante mi. Duis fermentum rutrum nunc, a aliquam sapien vehicula quis. Morbi malesuada velit aliquam, tristique dolor vel, rhoncus felis. Suspendisse aliquet tempus massa, interdum mattis metus ullamcorper sit amet. Phasellus laoreet, lacus vel pellentesque consequat, lectus purus imperdiet nisl, ut feugiat justo turpis volutpat magna. Suspendisse convallis felis est, vitae gravida sapien eleifend rhoncus. In feugiat a velit sed iaculis. Ut a velit a ex aliquet interdum non vel dui. Phasellus lorem eros, semper eu rhoncus in, mattis at diam.',
    backlog: [
      { 
        uuid: '0-0-0-1', 
        name: 'nazwa zadania 1',
        acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        userUuid: '0-0-0-1', 
        status: StatusType.TO_DO,
        storyPoints: 2,
      },
      { 
        uuid: '0-0-0-2', 
        name: 'nazwa zadania 2',
        acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        userUuid: '0-0-0-1', 
        status: StatusType.IN_PROGRESS,
        storyPoints: 3, 
      },
    ],
    sprints: [
      {
        uuid:'0-0-0-1', 
        name: 'Sprint 1',
        tasks: [
          { 
            uuid: '0-0-0-1', 
            name: 'nazwa zadania 1',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.IN_PROGRESS,
            storyPoints: 2,
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          },
          { 
            uuid: '0-0-0-2', 
            name: 'nazwa zadania 2',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.IN_PROGRESS,
            storyPoints: 3, 
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          },
          { 
            uuid: '0-0-0-3', 
            name: 'nazwa zadania 3',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.TO_DO,
            storyPoints: 1, 
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          },
          { 
            uuid: '0-0-0-4', 
            name: 'nazwa zadania 4',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.TO_DO,
            storyPoints: 1, 
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          },
          { 
            uuid: '0-0-0-5', 
            name: 'nazwa zadania 5',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.TO_DO,
            storyPoints: 1, 
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem ',
          },
          { 
            uuid: '0-0-0-6', 
            name: 'nazwa zadania 6',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.DONE,
            storyPoints: 1, 
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          },
          { 
            uuid: '0-0-0-7', 
            name: 'nazwa zadania 7',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.DONE,
            storyPoints: 1, 
            description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          },
        ],
      },
      {
        uuid:'0-0-0-2', 
        name: 'Sprint 2',
        tasks: [
          { 
            uuid: '0-0-0-1', 
            name: 'nazwa zadania 1',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.IN_PROGRESS,
            storyPoints: 2,
          },
          { 
            uuid: '0-0-0-2', 
            name: 'nazwa zadania 2',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.IN_PROGRESS,
            storyPoints: 3, 
          }, 
          { 
            uuid: '0-0-0-3', 
            name: 'nazwa zadania 1',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.IN_PROGRESS,
            storyPoints: 2,
          },
          { 
            uuid: '0-0-0-4', 
            name: 'nazwa zadania 2',
            acceptanceCriteria: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
            userUuid: '0-0-0-1', 
            status: StatusType.IN_PROGRESS,
            storyPoints: 3, 
          },
        ],
      },
    ],
  },
  {
    uuid: '0-0-0-2',
    name: 'Nazwa przestrzeni 2',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    uuid: '0-0-0-3',
    name: 'Nazwa przestrzeni 3',
    description: 'Lorem ipsum dolor sit amet',
  },
];


export const TASK = [
  {
    uuid: '0-0-0-1',
    name: 'Nazwa zadania',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante mi. Duis fermentum rutrum nunc, a aliquam sapien vehicula quis. Morbi malesuada velit aliquam, tristique dolor vel, rhoncus felis. Suspendisse aliquet tempus massa, interdum mattis metus ullamcorper sit amet. Phasellus laoreet, lacus vel pellentesque consequat, lectus purus imperdiet nisl, ut feugiat justo turpis volutpat magna. Suspendisse convallis felis est, vitae gravida sapien eleifend rhoncus. In feugiat a velit sed iaculis. Ut a velit a ex aliquet interdum non vel dui. Phasellus lorem eros, semper eu rhoncus in, mattis at diam.',
  }
]

export const STATUSES = [
  {
    label: "To do",
    value: StatusType.TO_DO
  },
  {
    label: "In progress",
    value: StatusType.IN_PROGRESS
  },
  {
    label: "Verification",
    value: StatusType.VERIFICATION
  },
  {
    label: "Done",
    value: StatusType.DONE
  }
]


export const USERS: User[] = [
  {
    uuid: "0-0-0-1",
    name: "Sylwia",
    surname: "Mosur",
    email: 'mosur@gmail.com',
  },
  {
    uuid: "0-0-0-2",
    name: "Kinga",
    surname: "Wrona",
    email: 'kw@gmail.com',
  },
  {
    uuid: "0-0-0-3",
    name: "Mateusz",
    surname: "Sitek",
    email: 'sitek@gmail.com',

  },
  {
    uuid: "0-0-0-4",
    name: "Marcin",
    surname: "Poręba",
    email: 'mp@gmail.com',
  }
]