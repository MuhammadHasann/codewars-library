export const was_package_received_yesterday = (
  tz_from: number,
  tz_to: number,
  start: number,
  duration: number
): boolean => {
  // sender local -> UTC
  const utc_sent = start - tz_from;
  const utc_receive = utc_sent + duration;

  // receiver UTC -> local
  const local_receive = utc_receive + tz_to;

  // Day of delivery (in the sender's zone)
  const send_day = Math.floor(start / 24);

  // Day of receipt (in the recipient zone)
  const receive_day = Math.floor(local_receive / 24);

  return receive_day < send_day;
};
