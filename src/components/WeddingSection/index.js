import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Resepsi</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="09.00 WIB"
                  date="Minggu, 09 Juli 2023"
                  description="Masjid Al-Munawaroh<br />Desa Parereja, Kec. Banjarharjo, Kab. Brebes"
                />
                <WeddingInfoBox
                  title="Resepsi"
                  time="09.00 WIB - Selesai"
                  date="Minggu - Senin, 09 - 10 Juli 2023"
                  description="Kediaman Mempelai Wanita<br />Desa Parereja  RT. 01 RW. 02, Blok Lapang, Kec. Banjarharjo, Kab. Brebes"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
