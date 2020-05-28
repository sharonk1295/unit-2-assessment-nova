const React = require('react');

class Index extends React.Component {
    render () {
        const {todos} = this.props;
        return(
            <html>
                <head>
                    <title>Unit 2 Assessment</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <h1>To Do List</h1>
                    {todos.length === 0 ? 
                    <h3>There are no To Dos yet!</h3> :
                    todos.map((task, index) => {
                        return (
                            <ul key={index}>
                                <li>{task.todo} - {task.done ? "Done" : "Not Done"}</li>
                                <form action='/?_method=DELETE' method="POST">
                        <input type="submit" value="DELETE"/>
                    </form>
                            </ul> 
                        );
                    })}
                    <hr/>
                    <form action="/" method="POST">
                        <input type="text" name="todo"/>
                        <input type="submit" value="ADD TO DO"/>
                    </form>
                </body>
            </html>
        )
    }
}


module.exports = Index;