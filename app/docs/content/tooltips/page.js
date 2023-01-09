"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Tooltips = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <SectionHeader name="Tooltips" icon="sidebar-flip" />
      <Container>
        <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>

        <p className="mt-5">
          This is a{" "}
          <OverlayTrigger
            overlay={
              <Tooltip>
                Some text for the <strong>tooltip</strong>.
              </Tooltip>
            }
          >
            <a href="#">tooltip example</a>
          </OverlayTrigger>{" "}
          (on hover) house next level keffiyeh haven't heard of them.
          Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit
          american apparel richardson vinyl chambray. Beard{" "}
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                Mei no quot mucius. Cu vim eirmod luptatum. At sit denique
                definitionem. Accusamus mediocritatem eos te, cu eam dicam
                oblique, ut usu nisl putent iuvaret.
              </Tooltip>
            }
          >
            <a href="#">bottom tooltip</a>
          </OverlayTrigger>{" "}
          stumptown, cardigans banh mi lomo thundercats.{" "}
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                Vim vidit sadipscing efficiantur ad, cum an sumo lobortis.
                Docendi eleifend eam ex, per nonumes propriae evertitur eu. Eos
                eu nullam labore lobortis. Qui iusto quaestio ea. Nihil copiosae
                delicatissimi cu mea. Reque quaerendum sit ei, ut novum
                dissentias vel.
              </Tooltip>
            }
          >
            <a href="#">Right tooltip</a>
          </OverlayTrigger>{" "}
          Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan
          chambray. A really ironic artisan{" "}
          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                Some text for the <strong>tooltip</strong>.
              </Tooltip>
            }
          >
            <a href="#">left tooltip</a>
          </OverlayTrigger>{" "}
          scenester farm-to-table banksy Austin freegan cred raw denim
          single-origin coffee viral.
        </p>

        <h5 className="mt-5">Positioning</h5>

        {["top", "right", "bottom", "left"].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button className="me-1" variant="outline-primary">
              Tooltip on {placement}
            </Button>
          </OverlayTrigger>
        ))}

        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
          }
        >
          {({ ref, ...triggerHandler }) => (
            <Button
              variant="warning"
              {...triggerHandler}
              className="d-inline-flex align-items-center"
            >
              <i className="fa-solid fa-circle-user" ref={ref}></i>
              <span className="ms-1">Hover to see</span>
            </Button>
          )}
        </OverlayTrigger>
      </Container>
    </>
  );
};

export default Tooltips;
