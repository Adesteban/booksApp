
const books = [
    {
      id: '1',
      name: 'Javascript for Impatient Programmers',
      image: require('../assets/book-images/javascript-for-prog.png'),
      author: 'Dr. Axel Rauschmayer',
      details: `This book makes JavaScript less challenging to learn for newcomers, by offering a modern view that is as consistent as possible.`,
      file: 'https://exploringjs.com/impatient-js/downloads/impatient-js-preview-book.pdf',
      reviews: '78',
      category: 'Popular', 
      
    },
    {
      id: '2',
      name: 'Advanced Guide to Python 3 Programming',
      image: require('../assets/book-images/advanced-py-guide.png'),
      author: 'Ian Mackie',
      details: `Advanced Guide to Python 3 Programming delves deeply into a host of subjects that you need to understand if you are to develop sophisticated real-world programs. Each topic is preceded by an introduction followed by more advanced topics, along with numerous examples, that take you to an advanced level.`,
      file: 'https://warin.ca/ressources/books/2019_Book_AdvancedGuideToPython3Programm.pdf',
      reviews: '34',
    },
    {
      id: '3',
      name: 'A Practical Introduction to Python 3',
      image: require('../assets/book-images/python-basics.png'),
      author: 'David Amos, Dan Bader',
      details: `This program builds on your IT foundations to help you take your career to the next level. It’s designed to teach you how to program with Python and how to use Python to automate common system administration tasks. You'll also learn to use Git and GitHub, troubleshoot and debug complex problems, and apply automation at scale by using configuration management and the Cloud.`,
      file: 'https://static.realpython.com/python-basics-sample-chapters.pdf',
      reviews: '55',
    },
    {
      id: '4',
      name: 'Beginning Programming with C for Dummies',
      image: require('../assets/book-images/programming-dummies.png'),
      author: 'Dr. Axel Rauschmayer',
      details: `C offers a reliable, strong foundation for programming and serves as a stepping stone upon which to expand your knowledge and learn additional programming languages. Written by veteran For Dummies author Dan Gookin, this straightforward-but-fun beginner's guide covers the fundamentals of using C and gradually walks you through more advanced topics including pointers, linked lists, file I/O, and debugging. With a special focus on the subject of an Integrated Development Environment, it gives you a solid understanding of computer programming in general as you learn to program with C.`,
      file: 'http://morten.planet.ee/MMM/dummies.pdf',
      reviews: '76',
      
    },
    {
      id: '5',
      name: 'Learning Firebase',
      image: require('../assets/book-images/firebase.png'),
      author: 'Dr. Axel Rauschmayer',
      details: `Android Firebase is a cloud service provider as well as a backend business that allows you to obtain organized data for mobile apps. This is an important aspect as almost all mobile apps today needs user verification and updates. Firebase is easy to use and allows quick reading and writing of data even for beginners. Firebase can be used to build iOS, Android and even web- based applications with real time data and storage and makes a variety of other products that software developers can utilize.`,
      file: 'https://riptutorial.com/Download/firebase.pdf',
      reviews: '82',
    },
    {
      id: '6',
      name: 'Data Sctructures & Algorithms',
      image: require('../assets/book-images/algorithms.png'),
      author: 'Michael Goodrich, Roberto Tamassia',
      details: `Using the power of technology to go beyond the borders of the printed page, Goodrich and Tamassia have created a book that is conceptually elegant and innovative. It incorporates the object-oriented design paradigm, using Java as the implementation language while also providing the fundamental intuition and analysis of each data structure studied.`,
      file: 'http://xpzhang.me/teach/DS19_Fall/book.pdf',
      reviews: '131',
    },
    {
      id: '7',
      name: 'Teach Yourself Java in 21 Days',
      image: require('../assets/book-images/java.png'),
      author: 'Laura Lemay, Charles Perkins',
      details: `Presents the basics of object-oriented programming, provides tutorials for Java applets and applications, and details the Java API`,
      file: 'https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf',
      reviews: '96',
      category: 'Popular', 
      
    },
    {
      id: '8',
      name: 'Data Structures & Algorithms in Java',
      image: require('../assets/book-images/datastruct.png'),
      author: 'Robert Lafore',
      details: `Many students view data structures and algorithms as difficult to understand, but this book thoroughly demystifies them. Working in Java, Robert Lafore presents each essential data structure and algorithm, using clear and simple example programs accessible through a Web browser-based "Workshop Applets." These programs demonstrate graphically exactly what each data structure looks like and how it works.`,
      file: 'https://everythingcomputerscience.com/books/schoolboek-data_structures_and_algorithms_in_java.pdf',
      reviews: '49',
    },
    {
      id: '9',
      name: 'Software Engineering 9th Edition',
      image: require('../assets/book-images/software-engineering.png'),
      author: 'Ian Sommerville',
      details: `The book is primarily aimed at university and college students taking introductoryand advanced courses in software and systems engineering. Software engineers inthe industry may find the book useful as general reading and as a means of updatingtheir knowledge on topics such as software reuse, architectural design, dependabilityand security, and process improvement. I assume that readers have completed anintroductory programming course and are familiar with programming terminology.`,
      file: 'https://engineering.futureuniversity.com/BOOKS%20FOR%20IT/Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf',
      reviews: '88',
      
    },
    {
      id: '10',
      name: 'Web Design Best Practices',
      image: require('../assets/book-images/ui.png'),
      author: 'Dominic Pacholczyk',
      details: `Web user interfaces are much more than buttons, menus and forms for users to fill out. They are the connection between the user and the experience; the first impression and a lasting impression that either makes a website feel like an old friend or a forgettable passerby.`,
      file: 'https://www.immagic.com/eLibrary/ARCHIVES/GENERAL/UXPIN_PL/U141030B.pdf',
      reviews: '95',
    },

  ];
  
  export default books;