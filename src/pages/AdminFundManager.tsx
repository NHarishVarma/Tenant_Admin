import { FunctionComponent, useCallback } from "react";
import styles from "./AdminFundManager.module.css";
const AdminFundManager: FunctionComponent = () => {
  const onButtonNormalContainerClick = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onButtonNormalContainer1Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onGroupContainer8Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onWordButtonContainerClick = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onGroupContainer9Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onWordButtonContainer1Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onGroupContainer10Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onWordButtonContainer2Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onGroupContainer11Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  const onWordButtonContainer3Click = useCallback(() => {
    // Please sync "Admin Tenant – 1" to the project
  }, []);

  return (
    <div className={styles.adminFundManager}>
      <b className={styles.logo}>{`AIP Tenant Management `}</b>
      <div className={styles.navbar}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-270.svg" />
          <img className={styles.groupItem} alt="" src="/group-272.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al
                <span className={styles.t}>t</span>ernati
                <span className={styles.v}>v</span>e
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.step1Of}>{`Step 1 of 10 `}</div>
      <div className={styles.adminFundManagerInner}>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg1.svg" />
        <img className={styles.userMenuIcon1} alt="" src="/user-menu1.svg" />
        <div className={styles.groupContainer}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.alternativeInvestmentPlatforContainer1}>
                Al
                <span className={styles.t}>t</span>ernati
                <span className={styles.v}>v</span>e
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.buttonNormal}
        onClick={onButtonNormalContainerClick}
      >
        <div className={styles.buttonNormalChild} />
        <div className={styles.addUser}>Add User</div>
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div
        className={styles.buttonNormal1}
        onClick={onButtonNormalContainer1Click}
      >
        <div className={styles.buttonNormalChild} />
        <div className={styles.addTenant}>Add Tenant</div>
        <img
          className={styles.iconMaterialAddCircleOutli1}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div className={styles.adminFundManagerChild} />
      <div className={styles.adminFundManagerItem} />
      <div className={styles.lineDiv} />
      <div className={styles.adminFundManagerChild1} />
      <div className={styles.adminFundManagerChild2} />
      <div className={styles.rectangleParent} onClick={onGroupContainer8Click}>
        <div className={styles.rectangleDiv} />
        <div className={styles.user1}>User 1​</div>
        <div className={styles.yes}>Yes</div>
        <div className={styles.fundManager}>Fund Manager</div>
        <div className={styles.wordButton} onClick={onWordButtonContainerClick}>
          <div className={styles.resetPassword}>Reset Password</div>
        </div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer9Click}>
        <div className={styles.rectangleDiv} />
        <div className={styles.user1}>User 2</div>
        <div className={styles.yes}>Yes</div>
        <div className={styles.fundManager}>Fund Manager</div>
        <div
          className={styles.wordButton}
          onClick={onWordButtonContainer1Click}
        >
          <div className={styles.resetPassword}>Reset Password</div>
        </div>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer10Click}
      >
        <div className={styles.rectangleDiv} />
        <div className={styles.user1}>User 1​</div>
        <div className={styles.yes}>Yes</div>
        <div className={styles.fundManager}>Fund Manager</div>
        <div
          className={styles.wordButton}
          onClick={onWordButtonContainer2Click}
        >
          <div className={styles.resetPassword}>Reset Password</div>
        </div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer11Click}>
        <div className={styles.rectangleDiv} />
        <div className={styles.user1}>User 1​</div>
        <div className={styles.yes}>Yes</div>
        <div className={styles.fundManager}>Fund Manager</div>
        <div
          className={styles.wordButton}
          onClick={onWordButtonContainer3Click}
        >
          <div className={styles.resetPassword}>Reset Password</div>
        </div>
      </div>
      <div className={styles.invitedParent}>
        <div className={styles.invited}>Invited</div>
        <div className={styles.role}>Role</div>
        <div className={styles.userName}>User Name</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-8.svg" />
        <img className={styles.groupChild4} alt="" src="/polygon-8.svg" />
        <img className={styles.groupChild5} alt="" src="/polygon-8.svg" />
      </div>
      <img
        className={styles.component20910}
        alt=""
        src="/component-209--10.svg"
      />
    </div>
  );
};

export default AdminFundManager;
