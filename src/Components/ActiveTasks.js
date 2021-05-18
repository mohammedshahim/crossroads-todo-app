import React from "react";
import { Button, Table } from "react-bootstrap";

function ActiveTasks(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#a8ebff" }}>Active Tasks</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((item) =>
            item.del || item.completed ? null : (
              <tr key={item.id}>
                <td>
                  {item.task}
                  <div className="float-right">
                    <Button
                      variant="success"
                      onClick={() => props.completeHandler(item.id)}
                    >
                      <i className="fas fa-check"></i>
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => props.deleteHandler(item.id)}
                    >
                      <i className="far fa-trash-alt"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default ActiveTasks;
