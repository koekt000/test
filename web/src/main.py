from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from web.src.db import User, Address, engine
from sqlalchemy.orm import Session

app = FastAPI()

app.mount("/static", StaticFiles(directory="web/static", html=True), name="static")


@app.get("/")
async def home():
    return FileResponse("web/static/index.html")


@app.get("/favicon.ico")
async def favicon():
    return FileResponse("web/static/images/favicon.ico")


# @app.get("/users/{user_id}/")
# async def read_user(user_id: int):
#     user = await database.get_user(user_id)
#     if user is None:
#         return JSONResponse(content={}, status_code=404)
#     return JSONResponse(content=user.__dict__)


@app.get("/hello/")
async def hello():
    return FileResponse("web/static/index.html")


@app.post("/users/new/")
async def create_user(user: dict):
    session = Session(engine)
    user = User(name=user['name'], password=user['password'])
    session.commit()
    user_id = user.id
    print('a')
    session.add(user)
    session.commit()
    
    return JSONResponse(content={"user_id": user_id}, status_code=200)
@app.post("/users/login/")
async def Login(request: Request):
    session = Session(engine)
    body = request.body
    login = body['login']
    password = body['password']
    pw = session.get(User, login)
    if pw is None:
        return JSONResponse(content={}, status_code=404)
    elif pw.password!= password:
        return JSONResponse(content={}, status_code=404)
    else:
        return JSONResponse(content={"user_id": pw.id}, status_code=200)
    

    
    