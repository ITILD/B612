package com.gis.template.domain;

import java.io.Serializable;


/**
 * 空三信息原始对象
 *
 * @author wangxu
 * @email wangxu@huichengsoft.com
 * @date 2021-02-01 13:19:00
 */
public class TemplateDO implements Serializable {

    private static final double serialVersionUID = 1L;


    private String tableName;

    /**
     * photoName
     */
    private String photoName;

    /**
     * photogroup
     */
    private String photogroup;

    /**
     * zbx
     */
    private String zbx;

    /**
     * longitude
     */
    private double longitude;

    /**
     * latitude
     */
    private double latitude;

    /**
     * height
     */
    private double height;

    /**
     * omega
     */
    private double omega;

    /**
     * phi
     */
    private double phi;

    /**
     * kappa
     */
    private double kappa;

    /**
     * fxjc
     */
    private String fxjc;

    /**
     * cqfq
     */
    private String cqfq;

    /**
     * path
     */
    private String path;

    /**
     * pwidth
     */
    private int pwidth;

    /**
     * pheight
     */
    private int pheight;

    /**
     * fcallength
     */
    private double fcallength;

    /**
     * pixelsize
     */
    private double pixelsize;

    /**
     * cameraorie
     */
    private String cameraorie;

    /**
     * principalx
     */
    private double principalx;

    /**
     * principaly
     */
    private double principaly;


    /**
     * cameratype
     */
    private String cameratype;

    /**
     * time
     */
    private String time;

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }

    public String getPhotogroup() {
        return photogroup;
    }

    public void setPhotogroup(String photogroup) {
        this.photogroup = photogroup;
    }

    public String getZbx() {
        return zbx;
    }

    public void setZbx(String zbx) {
        this.zbx = zbx;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getOmega() {
        return omega;
    }

    public void setOmega(double omega) {
        this.omega = omega;
    }

    public double getPhi() {
        return phi;
    }

    public void setPhi(double phi) {
        this.phi = phi;
    }

    public double getKappa() {
        return kappa;
    }

    public void setKappa(double kappa) {
        this.kappa = kappa;
    }

    public String getFxjc() {
        return fxjc;
    }

    public void setFxjc(String fxjc) {
        this.fxjc = fxjc;
    }

    public String getCqfq() {
        return cqfq;
    }

    public void setCqfq(String cqfq) {
        this.cqfq = cqfq;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public double getPwidth() {
        return pwidth;
    }

    public void setPwidth(int pwidth) {
        this.pwidth = pwidth;
    }

    public double getPheight() {
        return pheight;
    }

    public void setPheight(int pheight) {
        this.pheight = pheight;
    }

    public double getFcallength() {
        return fcallength;
    }

    public void setFcallength(double fcallength) {
        this.fcallength = fcallength;
    }

    public double getPixelsize() {
        return pixelsize;
    }

    public void setPixelsize(double pixelsize) {
        this.pixelsize = pixelsize;
    }

    public String getCameraorie() {
        return cameraorie;
    }

    public void setCameraorie(String cameraorie) {
        this.cameraorie = cameraorie;
    }

    public double getPrincipalx() {
        return principalx;
    }

    public void setPrincipalx(double principalx) {
        this.principalx = principalx;
    }

    public double getPrincipaly() {
        return principaly;
    }

    public void setPrincipaly(double principaly) {
        this.principaly = principaly;
    }

    public String getCameratype() {
        return cameratype;
    }

    public void setCameratype(String cameratype) {
        this.cameratype = cameratype;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
