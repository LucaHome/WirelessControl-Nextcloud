<?php
namespace OCA\LucaHome\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\IConfig;
use OCP\IL10N;
use OCP\Settings\ISettings;

class AdminSettings implements ISettings {

	/** @var IConfig */
    private $config;
    
	/** @var IL10N */
    private $l;
    
	/**
	 * Admin constructor.
	 *
	 * @param IConfig $config
	 * @param IL10N $l
	 */
	public function __construct(IConfig $config,IL10N $l) {
		$this->config = $config;
		$this->l = $l;
    }
    
	/**
	 * @return string the section ID, e.g. 'sharing'
	 */
	public function getSection() {
		return 'lucahome';
    }
    
	/**
	 * @return int whether the form should be rather on the top or bottom of
	 * the admin section. The forms are arranged in ascending order of the
	 * priority values. It is required to return a value between 0 and 100.
	 */
	public function getPriority() {
		return 50;
	}
}