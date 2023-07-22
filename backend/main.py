from fastapi import FastAPI

app = FastAPI()


@app.get('/board')
def get_board() : 
    board_data = { 
        'tasks' : { 
            "task-1" : {'id' : "task-1" , "content" : "created video"}, 
            "task-2" : {"id" : "task-2" , "content" : "edit video"}, 
        },
        "columns" : { 
            "column-1" : {
                "id" : "column-1" , 
                "title" : "todo" , 
                "taskIds" : ["task-2"]
            }, 
            "column-2" : { 
                "id" : "column-2", 
                "title" :"Done Column" , 
                "taskIds" : ["task-1"]
            }
        },
        "columnOrder" : ["column-1" , "column-2"]
    }
    return {"board" : board_data}