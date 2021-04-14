import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Axios from 'axios';
import './CreateTeam.css';

interface playerTypes {
    id: number;
    pl_id: string;
    name: string;
    club: string;
    nationality: string;
    logo: string;
}

function App() {

    const test = localStorage.getItem('playerList')!;
    useEffect(() => {
        console.log(JSON.parse(test));
    }, [])
    const playerList = JSON.parse(test);

  
    // const playerList22 = [
    //     { id: '1', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '2', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '3', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '4', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '5', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '6', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '7', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '8', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '9', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '10', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '11', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '12', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '13', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '14', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '15', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '16', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '17', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '18', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '19', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '20', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '21', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '22', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '23', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '24', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '25', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '26', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '27', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '28', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '29', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '30', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //     { id: '31', name: 'R. Varane', club: "Manchester City", photo: 'https://cdn.sofifa.com/players/176/580/20_60.png', logo: 'https://i.esdrop.com/d/Pk0wVRkk2W.jpg' },
    //     { id: '32', name: 'Samu Castillejo', club: 'Inter', photo: 'https://cdn.sofifa.com/players/178/518/20_60.png', logo: 'https://i.esdrop.com/d/XO1jzNrdbn.jpg'},
    //   ];


      const rowsFromBackend = {
        FW : {
          name: "FW",
          items: []
        },
        MF: {
          name: "MF",
          items: []
        },
        DF: {
          name: "DF",
          items: []
        },
        GK: {
          name: "GK",
          items: []
        },
        List: {
          name: "List",
          items: playerList
        }
      };
      

    const onDragEnd = (result: any, rows: any, setRows: any) => {
        if (!result.destination) return;
        const { source, destination } = result;
      
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = rows[source.droppableId];
          const destColumn = rows[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          setRows({
            ...rows,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          });
        } else {
          const column = rows[source.droppableId];
          const copiedItems = [...column.items];
          const [removed] = copiedItems.splice(source.index, 1);
          copiedItems.splice(destination.index, 0, removed);
          setRows({
            ...rows,
            [source.droppableId]: {
              ...column,
              items: copiedItems
            }
          });
        }
      };


  const [rows, setRows] = useState(rowsFromBackend);


  const check = () => {
    alert(rows.GK.items.length);
    if(rows.GK.items.length + rows.DF.items.length + rows.MF.items.length + rows.FW.items.length != 11) {
      console.log('11명이 아니다')
    }
    if(rows.GK.items.length > 1) {
      alert('골키퍼는 한 명만 가능합니다.');
    }
    console.log(rows);
  }
  

  return (
    <div className="container" style={{ top: '100%', height: '100%' }}>
        <button onClick={() => check()}>dd</button>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, rows, setRows)}
        >
            {Object.entries(rows).map(([columnId, column], index) => {
                return (
                    <>
                        <Droppable droppableId={columnId} key={columnId} direction={'horizontal'}>
                        {(provided, snapshot) => {
                            return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                background: snapshot.isDraggingOver
                                    ? "lightblue"
                                    : "white",
                                display: 'flex',
                                width: "100%",
                                height: '140px',
                                padding: '4px',
                                justifyContent: 'space-around',
                                minHeight: '4rem',
                                }}
                            >
                                {column.items.map((item: playerTypes, index: number) => {
                                return (
                                    <Draggable
                                    key={index}
                                    draggableId={item.pl_id}
                                    index={index}
                                    >
                                    {(provided, snapshot) => {
                                        return (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                            userSelect: "none",
                                            display: 'flex',
                                            height: '120px',
                                            width: '80px',
                                            backgroundColor: snapshot.isDragging
                                                ? "#263B4A"
                                                : "#456C86",
                                            color: "white",
                                            border: '1px solid black',
                                            ...provided.draggableProps.style
                                            
                                            }}
                                        > 
                                            <div><img src={item.logo} /></div>
                                            <div>{item.id}</div>
                                            <div>{item.club}</div>
                                            <div>{item.name}</div>
                                        </div>
                                        );
                                    }}
                                    </Draggable>
                                );
                                })}
                                {provided.placeholder}
                            </div>
                            );
                        }}
                        </Droppable>
                    </>
                )
            })}
        </DragDropContext>
    </div>
  );
}

export default App;


