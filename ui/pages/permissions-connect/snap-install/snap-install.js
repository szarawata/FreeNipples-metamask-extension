import React, { useCallback } from 'react';
import { PageContainerFooter } from '../../../components/ui/page-container';
import PermissionsConnectPermissionList from '../../../components/app/permissions-connect-permission-list';
import PermissionsConnectFooter from '../../../components/app/permissions-connect-footer';
import PermissionConnectHeader from '../../../components/app/permissions-connect-header';
import { useI18nContext } from '../../../hooks/useI18nContext';

export default function SnapInstall() {
  const t = useI18nContext();
  const onCancel = useCallback(() => {}, []);
  const onSubmit = useCallback(() => {}, []);
  const openSourceCode = useCallback(() => {}, []);

  return (
    <div className="page-container snap-install">
      <PermissionConnectHeader
        icon={null}
        iconName={null}
        headerTitle={"Install Snap"}
        headerText={"This is snap’s summary. It shows a simple description of the value of this snap. 120 characters max."}
        siteOrigin={"http://filecoin.com"}
        npmLabel={"Placeholder"}
      />
      <div className="snap-requests-permission">{t("snapRequestsPermission")}</div>
      <PermissionsConnectPermissionList permissions={{eth_accounts: true}} />
      <div className="source-code">
        <div className="text">{t("areYouDeveloper")}</div>
        <div className="link" onClick={openSourceCode}>{t("openSourceCode")}</div>
      </div>
      <PermissionsConnectFooter />
      <PageContainerFooter
        cancelButtonTyype="default"
        onCancel={onCancel}
        cancelText={t('cancel')}
        onSubmit={onSubmit}
        submitText={t('approveAndInstall')}
        buttonsSizeLarge={false}
      />
    </div>
  );
}
