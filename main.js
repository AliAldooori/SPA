const view = document.getElementById('view')

const toggelErr = (normal)=>{
    if(normal === true){
        view.classList.remove('err')
        view.classList.add('normal')
    }else{
        view.classList.remove('normal')
        view.classList.add('err')
    }
}

const populateViewUel = ()=>{
    view.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = 'The Jakarta Expression Language:'
    const text = document.createElement('p')
    text.textContent = 'is a special purpose programming language mostly used in Jakarta EE web applications for embedding and evaluating expressions in web pages. The specification writers and expert groups of the Java EE web-tier technologies have worked on a unified expression language which was first included in the JSP 2.1 specification (JSR-245), and later specified by itself in JSR-341, part of Java EE 7.'
    const text2 = document.createElement('p')
    text2.textContent="Jakarta EE gives developers a comprehensive set of vendor neutral, open specifications that are used for developing modern, cloud native Java applications from the ground up. With Jakarta EE, technology developers and consumers can be confident they have the best technologies for developing cloud native, mission-critical applications. And they can build on decades of Java developer expertise to move existing workloads to the cloud.Jakarta EE specifications, previously known as Java EE specifications, are developed by well-known industry leaders following the Jakarta EE Specification Process (JESP). "
    const h3 = document.createElement('h3')
    h3.textContent="Every Jakarta EE specification includes: "
    let myArr =[ "A specification document and Javadoc (APIs) that describe how the technology is implemented.",
    "A Technology Compatibility Kit (TCK) document that describes the tests that must be passed for Jakarta EE implementations to be certified as compatible.",
    "A compatible implementation that successfully passed the TCK."]
    function createList(spacecrafts){
        
        var listView=document.createElement('ol');
        
        for(var i=0;i<spacecrafts.length;i++)
        {
            var listViewItem=document.createElement('li');
            listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
            listView.appendChild(listViewItem);
        }
        
        return listView;
    }
    const img = document.createElement("img")

    const hh3 = document.createElement('h3')
    hh3.textContent="Jakarta EE delivers a combination of advantages that cannot be found in other Java frameworks:"
      
    let myArr2 =["Unparalleled maturity, stability, and backwards compatibility",
    "The architectural flexibility to support cloud-based microservices architectures as well as traditional, monolithic architectures",
    "A full-featured platform that can be set up in just a few dozen lines of code",
    "The ability to easily switch out underlying technologies to meet new requirements and take advantage of faster, lighter implementations"]

    let br = document.createElement("br")
    let br1 = document.createElement("br")
    let hr = document.createElement("hr")
        view.appendChild(title)
        view.appendChild(text)
        view.appendChild(text2)
        view.appendChild(br1)
        view.appendChild(h3)
        view.appendChild(createList(myArr));
        view.appendChild(br)
        view.appendChild(hh3)
        view.appendChild(createList(myArr2));
    toggelErr(true)
}


const populateViewJsp = ()=>{
    view.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = 'What is JSP ?'
    const text = document.createElement('p')
    text.textContent = "A Java Server Pages component is a type of Java servlet that is intended to fulfill the role of a user interface for a Java web application. JSP has access to the whole family of Java APIs, including the JDBC API, to access enterprise databases. Web developers  create JSPs as text files that join HTML or XHTML code, XML elements, and embedded JSP actions and commands. Using JSP, you can assemble input from users over Webpage forms, present records from a database or different sources, and build Web pages dynamically. JSP tags can be used for a variety of purposes, such as retrieving data from a database or registering user preferences, accessing JavaBeans components, passing control among pages, and sharing information between requests, pages, etc. Java Server Pages usually serve the same purpose as programs executed using the Common Gateway Interface (CGI).But JSP offers many benefits in contrast with the CGI. Firstly, Performance is significantly greater because JSP enables embedding Dynamic Elements in HTML Pages itself instead of having separate CGI files. Secondly, JSP is forever compiled before they are processed by the server, unlike CGI/Perl, which needs the server to load an interpreter and the target script each time the page is requested. Moreover, Java Server Pages are created on top of the Java Servlets API, so like Servlets, JSP also has access to all the influential Enterprise Java APIs, including JDBC, JNDI, EJB, JAXP, etc. JSP pages can be used in combination with servlets that manage the business logic, the model supported by Java servlet template engines. Finally, JSP is a fundamental part of Java EE, a complete platform for enterprise-class applications. This implies that JSP can play a part in the simplest applications to the most complex and demanding."
    myArr=["A JSP is a text document that comprises two types of text: static data and dynamic data. The static data can be represented in any text-based format (like HTML, XML, SVG, and WML), and the dynamic content can be expressed by JSP elements.",
    "JSP  is not a request-driven model view controller; however, JSP is accessed by the dynamically created web pages like HTML or XML",
    "Every tag attributes need to be declared in a TLD file.",
    "Does not supports"]
    function createList(spacecrafts){
        
        var listView=document.createElement('ol');
          for(var i=0;i<spacecrafts.length;i++)
        { var listViewItem=document.createElement('li');
            listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
            listView.appendChild(listViewItem);
        }
        return listView;}
   // const br = document.createElement("br")
   let br = document.createElement("br")
   let br1 = document.createElement("br1")

   
   const pargraph5 = document.createElement('p');
   pargraph5.textContent="also liberated the programmer from having to know the particularities of how the values are actually accessed: object.property can mean (depending on what the object is) either object.get(property) or object.getProperty(property) or object.getProperty() etc."
   const pargraph6 = document.createElement('p');
   pargraph6.textContent="During the development of JSP 2.0, the JavaServer Faces technology was released which also needed an expression language, but the expression language defined in the JSP 2.0 specification didn't satisfy all the needs for development with JSF technology. The most obvious limitations were that its expressions were evaluated immediately, and the JSF components could not invoke methods on server-side objects. A more powerful language was created with the following new features:"
   myArr2 =["Deferred expressions, which are not immediately evaluated",
   "Expressions that can set as well as get data",
   "Method expressions, which can invoke methods"]

    view.appendChild(title)
    view.appendChild(text)
    view.appendChild(createList(myArr))
    view.appendChild(pargraph5)
    view.appendChild(pargraph6)
    view.appendChild(createList(myArr2))


    toggelErr(true)
}

const populateViewJsf = ()=>{
    view.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = 'What is JSF ?'
    const text = document.createElement('p')
    const text2 = document.createElement('p')
    const text3 = document.createElement('p')
    text.textContent = 'JSF implements a facility to connect UI widgets with data sources and to server-side event handlers. The JSF specification describes a set of standard UI components and provides an Application Programming Interface (API) for developing components.JSF allows the reuse and extension of the current standard UI components. JSF decreases the effort to build and maintain applications, which will run on a Java application server and render application UI on to a target customer. JSF facilitates Web application development by Giving reusable UI components, Making simple data transfer among UI components, Managing UI state across various server requests, Enabling the implementation of custom components and Wiring client-side event to server-side application code. JSF provides multiple rendering capabilities that allow JSF UI components to render themselves differently depending on the client types.'
    myArr=["Java Server Faces (JSF) is an MVC web framework that explains the construction of User Interfaces (UI) for server-based applications using reusable UI components on a page.",
"JSF is a framework having backing bean model, JSF View moreover faces servlet controller",
"Tag attributes are fully dynamic and automatically map to properties, attributes moreover ValueExpressions on.UIComponent instances",
"It is possible to integrate JSF with richfaces. Richfaces supports multiple libraries for various UI components and ajax."]
function createList(spacecrafts){
        
    var listView=document.createElement('ol');
      for(var i=0;i<spacecrafts.length;i++)
    { var listViewItem=document.createElement('li');
        listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
        listView.appendChild(listViewItem);
    }
    return listView;} 
    view.appendChild(title)
    view.appendChild(text)
    view.appendChild(createList(myArr))
    toggelErr(true)
}
const populateViewAboutus = ()=>{
    view.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = '- Är det användbara tekniker?'
    const text = document.createElement('p')
    text.textContent = 'UEL ,JSP och JSF they are still useful even though they are old depends on what to build. JSF: java server faces is a web application based on java '
    const title2 = document.createElement('h2')
    title2.textContent = '- I vilka sammanhang används de?'
    const text2 = document.createElement('h3')
    text2.textContent=(' JSP :  ')
    myArr=["Web developer , I understod that JSP can uses often som template engine ","it can be usefull for small and not so big projects ","Its used for Web Technology for java"]
    function createList(spacecrafts){
        
        var listView=document.createElement('ol');
        for(var i=0;i<spacecrafts.length;i++)
        { var listViewItem=document.createElement('li');
        listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
        listView.appendChild(listViewItem);
    }
    return listView;} 
    const text1 = document.createElement('h3')
    text1.textContent=(' JSF :  ')
    myArr2=["I read its more use than JSP may be because of JSF more sutible logic for build project", "Its powerfull compenent based view", " Often used in MVC pattern."]
    const title3 = document.createElement('h3')
    title3.textContent = '- Används de fortfarande?'
    const text3 = document.createElement('p')
    text3.textContent=('Yes they can be used untill this moment ')
    
    const title4 = document.createElement('h3')
    title4.textContent = '- Om du blev ombedd att skapa någonting med de teknikerna, skulle du använda någon annan teknik i ställetpga att det finns bättre alternativ?'
    const text4 = document.createElement('p')
    text4.textContent=('I belive it depends on what to build big web project with MVC pattern i will consider JSF,  may be if its small website I will consider JSP because its relativly easy to learn and use   ')
    
    const title5 = document.createElement('h3')
    title5.textContent = '-  Motivera utförligt varför du i så fall skulle byta och redogör för vilken teknik du isf skulle använda.'
    myArr3 = ["I think from what i read they are (UEL,JSP,JSF) dont sperate between frontend and backend ,therfore I would most likly use springboot for backend and Java Script tools for frontend" ,
    "Java Script for example (JQuery , Ajax) is relativty easy to learn and use but also they are (UEL,JSP,JSF) brodly usede and this could be good for finding documentation and support, I think it was very hard to find helpfull documentation for UEL,JSF,JSP",
    "At least JSP and JSF is little old , I persently think the age of the language and tools are not the most important but in this case I read som critic about them "
]
const text5 = document.createElement('p')
text5.textContent='May be this fact would make me little carefull '
    
    view.appendChild(title)
    view.appendChild(text)
    view.appendChild(title2)
    view.appendChild(text2)
    view.appendChild(createList(myArr))
    view.appendChild(text1)
    view.appendChild(createList(myArr2))
    view.appendChild(title3)
    view.appendChild(text3)
    view.appendChild(title4)
    view.appendChild(text4)
    view.appendChild(title5)
    view.appendChild(createList(myArr3))
    view.appendChild(text5)
    
    

    
    toggelErr(true)
}

const populateViewExample = ()=>{
    view.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = 'Example'
    const img_1 = document.createElement('img')
    img_1.src = './images/01.png'
    img_1.style.width = '800px'
    const img_2 = document.createElement('img')
    img_2.style.width = '800px'
    img_2.src = './images/02.png'
    const img_3 = document.createElement('img')
    img_3.style.width = '800px'
    img_3.src = './images/03.png'
    view.appendChild(title)
    view.appendChild(img_1)
    view.appendChild(img_2)
    view.appendChild(img_3)
    view.style.display = 'flex'
    view.style.flexDirection = 'column'
    view.style.gap = '20px'
}

const showError = ()=>{
    view.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = 'Error'
    view.appendChild(title)
    toggelErr(false)
}


function getPage(page) {

    switch (page) {
        case 'uel': populateViewUel()
             break;
        case 'jsf': populateViewJsf()
             break;
        case 'jsp': populateViewJsp()
             break;
        case 'aboutus': populateViewAboutus()
             break;
        case 'example': populateViewExample()
             break;
    
        default: showError()
            break;
    }
}