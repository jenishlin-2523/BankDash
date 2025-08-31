import React from "react";
import chipWhite from "../assets/chip.png";
import chipDark from "../assets/chip.png";

const CardShell = ({ title, children }) => (
  <div
    style={{
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      padding: "20px",
      height: "100%",
    }}
  >
    <h3
      style={{
        fontSize: "15px",
        fontWeight: "600",
        color: "#1F2A56",
        marginBottom: "16px",
      }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const Card = ({ type }) => {
  if (type === "primary") {
    return (
      <div style={{ width: "100%", marginBottom: "20px" }}>
        
        <CardShell>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "stretch",
              justifyContent: "flex-start",
            }}
          >
            
            {/* Primary Card */}
            <div
              style={{
                flex: "1",
                minWidth: "260px",
                borderRadius: "16px",
                color: "white",
                padding: "20px",
                position: "relative",
                background:
                  "linear-gradient(135deg,#5B5BD6 0%, #3A57E8 50%, #2E3BCF 100%)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                <img
                  src={chipWhite}
                  alt="chip"
                  style={{
                    width: "42px",
                    height: "32px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <p
                  style={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    opacity: 0.8,
                  }}
                >
                  Balance
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginTop: "4px",
                  }}
                >
                  $5,756
                </p>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                }}
              >
                <div>
                  <p style={{ textTransform: "uppercase" }}>Card Holder</p>
                  <p style={{ fontSize: "14px", fontWeight: "600" }}>
                    Eddy Cusuma
                  </p>
                </div>
                <div>
                  <p style={{ textTransform: "uppercase" }}>Valid Thru</p>
                  <p style={{ fontSize: "14px", fontWeight: "600" }}>12/22</p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "16px",
                  height: "1px",
                  background: "rgba(255,255,255,0.3)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ letterSpacing: "2px", fontSize: "14px" }}>
                  3778 **** **** 1234
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "white",
                      opacity: 0.3,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "white",
                      opacity: 0.3,
                      display: "inline-block",
                      marginLeft: "-12px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Secondary Card */}
            <div
              style={{
                flex: "1",
                minWidth: "260px",
                borderRadius: "16px",
                padding: "20px",
                background: "white",
                border: "1px solid #e5e7eb",
                position: "relative",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                <img
                  src={chipDark}
                  alt="card chip"
                  style={{
                    width: "42px",
                    height: "32px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <p
                  style={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Balance
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#1F2A56",
                    marginTop: "4px",
                  }}
                >
                  $5,756
                </p>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                <div>
                  <p style={{ textTransform: "uppercase" }}>Card Holder</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Eddy Cusuma
                  </p>
                </div>
                <div>
                  <p style={{ textTransform: "uppercase" }}>Valid Thru</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    12/22
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "16px",
                  height: "1px",
                  background: "#e5e7eb",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    letterSpacing: "2px",
                    fontSize: "14px",
                    color: "#374151",
                  }}
                >
                  3778 **** **** 1234
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#9ca3af",
                      opacity: 0.7,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#9ca3af",
                      opacity: 0.7,
                      display: "inline-block",
                      marginLeft: "-12px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardShell>
      </div>
    );
  }

  return null;
};

export default Card;
