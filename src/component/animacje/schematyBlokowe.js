import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "react-bootstrap";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const algs = [
    { value: "quickSort", label: "sortowanie szybkie" },
    { value: "selectionSort", label: "sortowanie przez wybór" },
    { value: "bubbleSort", label: "sortowanie bąbelkowe" },
    { value: "insertionSort", label: "sortowanie przez wstawianie" },
    { value: "mergeSort", label: "sortowanie przez scalanie" },
    { value: "heapSort", label: "sortowanie przez kopcowanie" },
    { value: "countingSort", label: "sortowanie przez zliczanie" },
  ];

  const algoritm = algs.find((e) => e.label === props.alg).value;

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.title}</h2>
      <img
        src={require("../../resources/" + props.d + "/" + algoritm + ".png")}
        alt="obraz przedstawiający schemat blokowy algorytmu lub pseudokod"
      />
    </div>
  );

  return (
    <div>
      <div m="2">
        <Button variant="outline-info" onClick={handleOpen} className="btnMy">
          {props.title}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
