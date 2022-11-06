import React from 'react';

export function CaptionRow(props) {
  return (
    <p>
      <span className="caption__icon">{props.icon}</span>
      <b>{props.title}</b>
      <span>{props.children}</span>
      {
        (props.symbol === 'sol' ?
         <span className="caption__symbol"> ◎</span> : <></>)
      }
    </p>
  );
}

export function CaptionColumn(props) {
  return (
    <div className="column">
      {props.children}
    </div>
  );
}

export function Caption(props) {
  return (
    <div className={'caption ' + props.type
                  + (props.icons ? '' : ' no-icons ')}>
      {props.children}
    </div>
  );
}

export default function NftCaption(props) {
  return (
    <Caption type={props.type} icons={props.icons}>
      <CaptionColumn>
        <CaptionRow icon="◎" title="Mint price" symbol="sol">{props.price}</CaptionRow>
        <CaptionRow icon="Ξ" title="Whitelist" symbol="sol">{props.whitelist}</CaptionRow>
        <CaptionRow icon="⊹" title={props.freeMint}>free mint</CaptionRow>
      </CaptionColumn>
      <CaptionColumn>
        <CaptionRow icon="⋑" title="Mint supply">{props.mint}</CaptionRow>
        <CaptionRow icon="⋕" title="Total supply">{props.supply}</CaptionRow>
        <CaptionRow icon="⋏" title="Reserve">{props.reserve}</CaptionRow>
      </CaptionColumn>
    </Caption>
  );
}
