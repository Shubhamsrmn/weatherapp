export const fetchFun = async function (location) {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4ee96dfd14d44dfcb72141708231204&q=${location}&aqi=yes`
    );
    if (res.status !== 200) throw new Error("error");
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      err: "error",
    };
  }
};
export async function getLocationNFetch(lat, lon) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=4ee96dfd14d44dfcb72141708231204&q=${lat.slice(
      0,
      7
    )},${lon.slice(0, 7)}&aqi=yes`
  );
  const data = await res.json();
  return data;
}
